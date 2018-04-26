/**
 *
 * @author arman
 * @since 10/3/2016.
 *
 */
'use strict';

import React, {Component, PropTypes} from 'react';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

class CustomToolbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 3,
    };
  }

  renderCreatePerson() {
    this.context.router.push('/create/person');
  }

  goTo() {
    this.context.router.push('/');
  }

  handleChange(event, index, value) {
    this.setState({value});
  }

  render() {
    return (
      <Toolbar>
        <ToolbarGroup firstChild={true}>
          <RaisedButton label="Create Person" primary={true} onClick={this.renderCreatePerson.bind(this)}/>
        </ToolbarGroup>
        <ToolbarGroup>
          <ToolbarSeparator />
          <IconMenu
            iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
            anchorOrigin={{horizontal: 'right', vertical: 'top'}}
            targetOrigin={{horizontal: 'right', vertical: 'top'}} >
            <MenuItem primaryText="Settings" />
            <MenuItem primaryText="Help" />
            <MenuItem primaryText="Sign out" onClick={this.goTo.bind(this)} />
          </IconMenu>
        </ToolbarGroup>
      </Toolbar>
    );
  }
}

CustomToolbar.contextTypes = {
  router: PropTypes.object.isRequired
};

export default CustomToolbar;