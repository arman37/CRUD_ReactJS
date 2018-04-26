/**
 *
 * @author arman
 * @since 10/3/2016.
 *
 */
'use strict';

import React, { Component } from 'react';
import {throttle} from './utils';
import 'whatwg-fetch';
import 'babel-polyfill';
import update from 'react-addons-update';
import PersonList from './PersonList';

const API_URL = 'http://127.0.0.1:3000';
const API_HEADERS = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    Authorization: 'any-string-you-like'// The Authorization is not needed for local server
};

class CRUDContainer extends Component {
  constructor() {
    super(...arguments);

    this.state = {
      personList: [],
    };
  }

  componentDidMount() {
    this.getPersonList();
  }

  showConfirmation(message) {
    this.props.callbacks.showSnackbar(message);
  }

  getPersonList() {
    fetch(`${API_URL}/`, {headers: API_HEADERS})
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({personList: responseData});
        window.state = this.state;
      })
      .catch((error) => {
        console.log('Error fetching and parsing data', error);
        this.showConfirmation('Error fetching and parsing data.');
      });
  }

  addPerson(person) {
    let prevState = this.state;
    let nextState = update(this.state.personList, { $push: [person] });

    this.setState({personList:nextState});
    fetch(`${API_URL}/`, {
      method: 'POST',
      headers: API_HEADERS,
      body: JSON.stringify(person)
    })
    .then((response) => {
      if(response.ok){
        return response.json()
      } else {
        throw new Error("Server response wasn't OK")
      }
    })
    .then((responseData) => {
      person.person_id=responseData.person_id;
      this.setState({personList:nextState});
      this.showConfirmation('Person data has been added successfully.');
    })
    .catch((error) => {
      this.setState(prevState);
      this.showConfirmation("Person couldn't be added.");
    });
  }

  editPerson(person) {
    let prevState = this.state;
    let personIndex = this.state.personList.findIndex((p)=>p.person_id == person.person_id);
    let nextState = update(
      this.state.personList, {
        [personIndex]: { $set: person }
      });

    this.setState({personList:nextState});
    fetch(`${API_URL}/${person.person_id}`, {
      method: 'PUT',
      headers: API_HEADERS,
      body: JSON.stringify(person)
    })
    .then((response) => {
      if(!response.ok){
        throw new Error("Server response wasn't OK")
      }else {
        this.showConfirmation('Person data successfully updated.');
      }
    })
    .catch((error) => {
      console.error("Fetch error:",error)
      this.setState(prevState);
      this.showConfirmation("Person data couldn't be updated.");
    });
  }

  removePerson(personId, personIndex) {
    console.log(personId);
    let prevState = this.state;
    let nextState = update(this.state.personList, { $splice: [[personIndex,1]] });

    this.setState({personList: nextState});
    fetch(`${API_URL}/${personId}`, {
      method: 'DELETE',
      headers: API_HEADERS
    })
    .then((response) => {
      if (response.ok){
        return response.json()
      } else {
        throw new Error("Server response wasn't OK")
      }
    })
    .then((responseData) => {
      if (responseData.success) {
        this.setState({personList:nextState});
        this.showConfirmation('Person data has been removed successfully.');
      } else {
        this.showConfirmation("Person data couldn't be removed.");
        throw new Error("Server response wasn't OK");
      }
    })
    .catch((error) => {
      this.setState(prevState);
    });
  }

  render() {
    let personModal = this.props.children && React.cloneElement(this.props.children, {
        personList: this.state.personList,
        callBacks: {
          addPerson: this.addPerson.bind(this),
          editPerson: this.editPerson.bind(this)
        }
      });

    return (
      <div>
        <PersonList personList={this.state.personList} callBacks={{
          removePerson: this.removePerson.bind(this)
        }} />
        {personModal}
      </div>
    );
  }
}

export default CRUDContainer;