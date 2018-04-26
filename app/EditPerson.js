/**
 *
 * @author arman
 * @since 10/3/2016.
 *
 */
'use strict';
import React,{Component, PropTypes} from 'react';
import PersonForm from './PersonForm';

class EditPerson extends Component {
  componentWillMount() {
    let person = this.props.personList.find((person)=>person.person_id == this.props.params.person_id);
    this.setState(person);
  }

  handleChange(field, value) {
    this.setState({[field]: value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.callBacks.editPerson(this.state);
    this.context.router.push('/dashboard');
  }

  handleClose(e) {
    this.context.router.push('/dashboard');
  }

  render() {
    return (
      <PersonForm
        draftValue={this.state}
        buttonLabel="Edit Person"
        handleChange={this.handleChange.bind(this)}
        handleSubmit={this.handleSubmit.bind(this)}
        handleClose={this.handleClose.bind(this)} />
    );
  }
}

EditPerson.propTypes = {
  callBacks: PropTypes.object,
};

EditPerson.contextTypes = {
  router: PropTypes.object.isRequired
};

export default EditPerson;