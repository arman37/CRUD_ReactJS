/**
 *
 * @author arman
 * @since 10/3/2016.
 *
 */
'use strict';

import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

class PersonList extends Component {
  render() {
    let tableData = this.props.personList;

    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderColumn colSpan="7" tooltip="Person List" style={{textAlign: 'center'}}>
              Person List
            </TableHeaderColumn>
          </TableRow>
          <TableRow>
            <TableHeaderColumn tooltip="The ID">ID</TableHeaderColumn>
            <TableHeaderColumn tooltip="The Name">Name</TableHeaderColumn>
            <TableHeaderColumn tooltip="The Age">Age</TableHeaderColumn>
            <TableHeaderColumn tooltip="The Address">Address</TableHeaderColumn>
            <TableHeaderColumn tooltip="The Phone">Phone</TableHeaderColumn>
            <TableHeaderColumn tooltip="The Email">Email</TableHeaderColumn>
            <TableHeaderColumn tooltip="Actions">Actions</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tableData.map( (person, index) => (
            <TableRow key={index} selected={person.selected}>
              <TableRowColumn>{index + 1}</TableRowColumn>
              <TableRowColumn>{person.name}</TableRowColumn>
              <TableRowColumn>{person.age}</TableRowColumn>
              <TableRowColumn>{person.address}</TableRowColumn>
              <TableRowColumn>{person.phone}</TableRowColumn>
              <TableRowColumn>{person.email}</TableRowColumn>
              <TableRowColumn>
                {
                  <div className="person">
                    <span title="Edit" className="person__edit"><Link to={'/edit/person/' + person.person_id}>&#9998;</Link></span>&emsp;
                    <span title="Remove" onClick={this.props.callBacks.removePerson.bind(null, person.person_id, index)} className="person__remove"><a href="#">&#9003;</a></span>
                  </div>
                }
              </TableRowColumn>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  }
}

export default PersonList;