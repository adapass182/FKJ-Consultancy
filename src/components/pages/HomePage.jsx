import React from 'react';
import PropTypes from 'prop-types'

import { Grid, Paper, withStyles } from '@material-ui/core'
import {lorem} from '../../loremIpsum'
import redbck from '../redbck.jpg'
import profile from '../profile.jpg'

const styles = {
  root: {
    flexGrow: 1,
    position: "sticky",
    marginTop: "3.5em",
    marginBottom: "2em",
    // backgroundImage: `url(${redbck})`,
    // backgroundPosition: "center",
    // backgroundRepeat: "no-repeat",
    // backgroundSize: "cover"
  },
  paper: {
    flexGrow: 1,
    margin: "2em",
    height: "auto",
    width: "auto",
    fontFamily: "Aladdin",
    background: "transparent"
  }
}

class HomePage extends React.Component {

    render() {
      const { classes } = this.props

      return (
            <Grid container className={classes.root} spacing={0}>
              <Grid item xs={12}>
                <Grid container spacing={0}>
                    <Grid key={"profile-img0"} item className={classes.paper}>
                        {<img src={profile} title="fiona-profile" />}
                    </Grid>
                </Grid>
              </Grid>
            </Grid>
      )
    }
  }

  HomePage.propTypes = {
    styles: PropTypes.object.isRequired
  }
  
  export default withStyles(styles)(HomePage);



  // <div>
  //             <div className={styles.h1Copy}>
  //               <h1>Fiona Johnson</h1>
  //               <h3>Qualified Social Worker</h3>
  //             </div>
  //             <div className={styles.bodyCopy}>
  //               <p>{lorem}</p>
  //             </div>
  //           </div>