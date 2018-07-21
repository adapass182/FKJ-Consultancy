import React from "react";
import PropTypes from "prop-types";
import { AppBar, Button, Drawer, Grid, Toolbar, Typography, withStyles } from '@material-ui/core'
import HomeIcon from '@material-ui/icons/Home'
import {Link} from 'react-router-dom'
import BackgroundImage from '../redbck.jpg'
import SimpleMenu from './Menu'
import SimpleTabs from './Tab'
import logo from '../logo.png'


const styles = {
  root: {
    flexGrow: 1,
    height: "4em",
    position: "sticky",
    backgroundColor: "#f7f7f2"
  },
  img: {
    backgroundImage: `url(${BackgroundImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
  },
  title: {
    flexGrow: 1,
    textAlign: "right",
    textAlignVertical: "center",
    fontFamily: 'Aladdin',
    fontWeight: "bold"
  }
};

function SimpleAppBar(props) {
  const { classes } = props;
  return (
    <div>
      <AppBar color="inherit" align="center">
        <Toolbar className={classes.root}>
          <Grid>
            {<img src={logo} title="fkj-logo" height="40" width="40" style={{marginRight: '1em', alignSelf: "right"}}/>}
          </Grid>
          <Typography className={classes.title} variant="title">
            FKJ Consultancy
          </Typography>
          {/* <Button component={Link} to="/home" color="inherit">
            <HomeIcon />
          </Button>
          <SimpleMenu /> */}
        </Toolbar>
      </AppBar>
      <SimpleTabs />
    </div>
  );
}

SimpleAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleAppBar);