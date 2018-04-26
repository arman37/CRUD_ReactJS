/**
 *
 * @author arman
 * @since 10/3/2016.
 *
 */
'use strict';

import React, {Component, PropTypes} from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class NewForm extends Component {
  handleChange(field, e) {
    this.props.handleChange(field, e.target.value);
  }

  handleClose(e) {
    e.preventDefault();
    this.props.handleClose();
  }

  render() {
    return (
      <div>
        <div className="form create-edit-form">
          <form onSubmit={this.props.handleSubmit.bind(this)}>
            <TextField
              value={this.props.draftValue.name}
              hintText="name"
              floatingLabelText="Person Name"
              autoFocus={true}
              required={true}
              onChange={this.handleChange.bind(this, 'name')}
              className="form-input-wrapper create-form" /><br/>
            <TextField
              value={this.props.draftValue.age}
              hintText="age"
              floatingLabelText="Person Age"
              required={true}
              onChange={this.handleChange.bind(this, 'age')}
              className="form-input-wrapper create-form" /><br/>
            <TextField
              value={this.props.draftValue.address}
              hintText="address"
              floatingLabelText="Address"
              multiLine={true}
              rows={2}
              rowsMax={4}
              required={true}
              onChange={this.handleChange.bind(this, 'address')}
              className="form-input-wrapper create-form" /><br />
            <TextField
              value={this.props.draftValue.phone}
              hintText="phone"
              floatingLabelText="Person Phone"
              required={true}
              onChange={this.handleChange.bind(this, 'phone')}
              className="form-input-wrapper create-form" /><br/>
            <TextField
              value={this.props.draftValue.email}
              hintText="phone"
              floatingLabelText="Person Email"
              required={true}
              onChange={this.handleChange.bind(this, 'email')}
              className="form-input-wrapper create-form" /><br/>
            <RaisedButton
              label={this.props.buttonLabel}
              primary={true}
              type="submit"
              className="btn-save" />
            <RaisedButton
              label="Cancel"
              secondary={true}
              className="btn-cancel"
              onClick={this.handleClose.bind(this)} /><br/>
          </form>
        </div>
        <div className="overlay" onClick={this.handleClose.bind(this)}>
        </div>
      </div>
    );
  }
}

export default NewForm;