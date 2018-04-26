/**
 *
 * @author arman
 * @since 10/3/2016.
 *
 */
'use strict';

import React, {Component, PropTypes} from 'react';
import CustomToolbar from './CustomToolbar';
import Snackbar from 'material-ui/Snackbar';

class Dashboard extends Component {
  constructor() {
    super(...arguments);

    this.state = {
      showMsg: false,
      message: 'Operation completed successfully.',
      autoHideDuration: 5000
    };
  }

  showSnackbar(message) {
    this.setState({
      showMsg: true,
      message: message
    });
  }

  hideSnackbar() {
    this.setState({
      showMsg: false
    });
  }

  render() {
    let childModal = this.props.children && React.cloneElement(this.props.children, {
        callbacks: {
          showSnackbar: this.showSnackbar.bind(this)
        }
      });

    return (
      <div>
        <CustomToolbar />
        {childModal}
        <Snackbar
          open={this.state.showMsg}
          message={this.state.message}
          action="Close"
          autoHideDuration={this.state.autoHideDuration}
          onActionTouchTap={this.hideSnackbar.bind(this)}
          onRequestClose={this.hideSnackbar.bind(this)} />
      </div>
    );
  }
}

export default Dashboard;