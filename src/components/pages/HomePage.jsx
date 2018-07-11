import React from 'react';
import PropTypes from 'prop-types'

import { Grid, Paper, withStyles } from '@material-ui/core'
import {lorem} from '../../loremIpsum'

const styles = {
  root: {
    flexGrow: 1,
    position: "sticky",
    marginTop: "4em",
    marginBottom: "4em"
  },
  paper: {
    padding: "1em",
    margin: "1em",
    height: "auto",
    width: "auto",
    fontFamily: "Aladdin"
  },
}

class HomePage extends React.Component {

    render() {
      const { classes } = this.props

      return (
            <Grid container className={classes.root} spacing={0}>
              <Grid item xs={12}>
                <Grid container justify="center" spacing={0}>
                  {[0, 1, 2, 3, 4, 5, 6].map(value => (
                    <Grid key={value} item>
                      <Paper className={classes.paper}>
                        {lorem}
                      </Paper>
                    </Grid>
                  ))}
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