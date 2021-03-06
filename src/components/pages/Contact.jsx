import React from 'react';
import PropTypes from 'prop-types'

import { Grid, Paper, withStyles } from '@material-ui/core'
// import {lorem} from '../../loremIpsum'

const styles = {
  root: {
    flexGrow: 1,
    position: "sticky",
    marginTop: "6em"
  },
  paper: {
    padding: "1em",
    margin: "1em",
    height: "auto",
    width: "auto",
    fontFamily: "Aladdin"
  },
}

class Contact extends React.Component {

    render() {
      const { classes } = this.props

      return (
            <Grid container className={classes.root} spacing={0}>
              <Grid item xs={12}>
                <Grid container className={classes.homePage} justify="center" spacing={0}>
                  {[0, 1].map(value => (
                    <Grid key={value} item>
                      <Paper className={classes.paper}>
                        Contact Fiona
                      </Paper>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
      )
    }
  }

  Contact.propTypes = {
    classes: PropTypes.object.isRequired
  }
  
  export default withStyles(styles)(Contact);