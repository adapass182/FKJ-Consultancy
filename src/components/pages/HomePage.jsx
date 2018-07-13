import React from 'react';
import PropTypes from 'prop-types'

import { Paper, withStyles } from '@material-ui/core'
import { intro, lorem} from '../../webcopy'
// import redbck from '../redbck.jpg'
import profile from '../profile.jpg'

import { Container, Row, Col } from 'react-grid-system';

const styles = {
  root: {
    flexGrow: 1,
    // position: "sticky",
    // marginTop: "6em",
    // marginBottom: "2em",
    // backgroundImage: `url(${redbck})`,
    // backgroundPosition: "center",
    // backgroundRepeat: "no-repeat",
    // backgroundSize: "cover"
  },
  // img: {
  //   flexGrow: 1,
  //   margin: "2em",
  //   height: "auto",
  //   width: "auto",
  //   fontFamily: "Aladdin",
  //   background: "transparent"
  // }
}

class HomePage extends React.Component {

    render() {
      const { classes } = this.props

      return (
        <Container fluid style={{ marginTop: "8em" }}>
          <Row>
            <Col>
            <Paper style={{marginLeft: "8em", padding: "1em"}}>
                PERSONAL INFO
              </Paper>
              <Paper style={{marginLeft: "8em", padding: "1em"}}>
                {intro}
              </Paper>
            </Col>
            <Col>
              <Paper style={{float: "right", marginRight: "8em"}}>
              {<img src={profile} title="fiona-profile"/>}
              </Paper>
            </Col>
          </Row>
        </Container>
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