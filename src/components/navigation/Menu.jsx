import React from 'react';
import {Link} from 'react-router-dom'

import IconButton from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu1 from '@material-ui/icons/Menu'


class SimpleMenu extends React.Component {
  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;

    return (
      <div>
        <IconButton
          aria-owns={anchorEl ? 'simple-menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          <Menu1 />
        </IconButton>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <MenuItem onClick={this.handleClose} component={Link} to="/about">About</MenuItem>
          <MenuItem onClick={this.handleClose} component={Link} to="/experience">Experience</MenuItem>
          <MenuItem onClick={this.handleClose} component={Link} to="/contact">Contact</MenuItem>
        </Menu>
      </div>
    );
  }
}

export default SimpleMenu;