/**
 *
 * @author arman
 * @since 10/3/2016.
 *
 */
'use strict';

import React, {Component, PropTypes} from 'react';
import Paper from 'material-ui/Paper';

class Header extends Component {
  render() {
    return (
      <Paper className="header-wrapper" zDepth={2}>
        <h1>A simple CRUD application with React & NodeJS</h1>
      </Paper>
    );
  }
}

export default Header;