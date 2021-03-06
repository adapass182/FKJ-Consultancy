import React from 'react'
import PropTypes from 'prop-types'
import { Link, withStyles } from '@material-ui/core/styles'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import redbck from '../redbck.jpg'
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const footStyle = {
  root: {
    left: "0",
    bottom: "0",
    width: "100%",
    height: "2em",
    textAlign: "center",
    background: "white",
    position: "static",
    backgroundColor: "#ef233c"
    // backgroundImage: `url(${redbck})`,
    // backgroundPosition: "center",
    // backgroundRepeat: "no-repeat",
    // backgroundSize: "cover"
  },
  icon: {
    color: "black",
    colorSecondary: "red"
  }
};

class SimpleBottomNavigation extends React.Component {
  state = {
    value: '',
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <BottomNavigation
        value={value}
        onChange={this.handleChange}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction className={classes.icon} label="About" style={{iconActive: {color: "red"}, labelActive: {color: "red"}}} />
        <BottomNavigationAction className={classes.icon} label="Experience" />
        <BottomNavigationAction className={classes.icon} label="Contact" />
      </BottomNavigation>
    );
  }
}

SimpleBottomNavigation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(footStyle)(SimpleBottomNavigation);