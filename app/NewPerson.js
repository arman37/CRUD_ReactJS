/**
 *
 * @author arman
 * @since 10/3/2016.
 *
 */
'use strict';
import React,{Component, PropTypes} from 'react';
import PersonForm from './PersonForm';

class NewPerson extends Component {
  componentWillMount() {
    this.setState({
      name:'',
      age:'',
      address:'',
      phone:'',
      email:''
    });
  }

  handleChange(field, value) {
    this.setState({[field]: value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.callBacks.addPerson(this.state);
    this.context.router.push('/dashboard');
  }

  handleClose(e) {
    this.context.router.push('/dashboard');
  }

  render() {
    return (
      <PersonForm
        draftValue={this.state}
        buttonLabel="Create Person"
        handleChange={this.handleChange.bind(this)}
        handleSubmit={this.handleSubmit.bind(this)}
        handleClose={this.handleClose.bind(this)} />
    );
  }
}

NewPerson.propTypes = {
  callBacks: PropTypes.object
};

NewPerson.contextTypes = {
  router: PropTypes.object.isRequired
};

export default NewPerson;