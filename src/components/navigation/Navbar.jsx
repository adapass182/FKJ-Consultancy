import React from "react";
import PropTypes from "prop-types";
import { AppBar, Button, Grid, Image, Toolbar, Typography, withStyles } from '@material-ui/core'
import HomeIcon from '@material-ui/icons/Home'
import {Link} from 'react-router-dom'
import BackgroundImage from '../redbck.jpg'
import SimpleMenu from './Menu'
import logo from '../logo.png'


const styles = {
  root: {
    flexGrow: 1,
    height: "2em",
    textAlign: "left",
    fontFamily: 'Aladdin',
    position: "sticky"
  },
  img: {
    backgroundImage: `url(${BackgroundImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
  }
};

function SimpleAppBar(props) {
  const { classes } = props;
  return (
    <div>
      <AppBar color="inherit" align="center" className={classes.img}>
        <Toolbar>
          <Grid>
            {<img src={logo} title="fkj-logo" height="40" width="40" style={{marginRight: '1em'}}/>}
          </Grid>
          <Typography className={classes.root} variant="title">
            FKJ Consultancy
          </Typography>
          <Button component={Link} to="/home" color="inherit">
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