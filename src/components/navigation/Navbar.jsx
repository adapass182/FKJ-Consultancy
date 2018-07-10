import React from "react";
import PropTypes from "prop-types";
import { AppBar, Button, Toolbar, Typography, withStyles } from '@material-ui/core'
import HomeIcon from '@material-ui/icons/Home'

import SimpleMenu from './Menu'

const styles = {
  root: {
    flexGrow: 1,
    textAlign: "left"
  }
};

function SimpleAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" color="inherit" align="center">
        <Toolbar>
          <Typography className={classes.root} variant="title" color="inherit">
            FKJ Consultancy
          </Typography>
          <Button href="/home" color="inherit">
            <HomeIcon />
          </Button>
          <SimpleMenu />
        </Toolbar>
      </AppBar>
    </div>
  );
}

SimpleAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleAppBar);