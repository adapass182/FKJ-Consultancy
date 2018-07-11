import React from "react";
import PropTypes from "prop-types";
import { AppBar, Button, Grid, Image, Toolbar, Typography, withStyles } from '@material-ui/core'
import HomeIcon from '@material-ui/icons/Home'
import {Link} from 'react-router-dom'
import BackgroundImage from '../Rectangle.png'
import SimpleMenu from './Menu'


const styles = {
  root: {
    flexGrow: 1,
    textAlign: "left",
    fontFamily: 'Aladdin'
  },
  appImg: {
    backgroundImage: BackgroundImage
  }
};

function SimpleAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" color="inherit" align="center">
        <Toolbar className={classes.appImg}>
          <Grid>
            {<img src="https://i.imgur.com/VnyPDiK.jpg" title="source: imgur.com" height="40" width="40" style={{marginRight: '1em'}}/>}
          </Grid>
          <Typography className={classes.root} variant="title" color="inherit">
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