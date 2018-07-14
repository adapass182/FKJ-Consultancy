import React from 'react';
import PropTypes from 'prop-types'

import { Paper, withStyles } from '@material-ui/core'
import {bio} from '../../loremIpsum'
// import redbck from '../redbck.jpg'

import { Container, Row, Col } from 'react-grid-system'

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
        <Container fluid style={{ paddingTop: "6em", paddingLeft: "6em", paddingRight: "16em", backgroundColor: "#544b3d"}}>
          <Row>
            <Col>
              <Paper style={{ padding: "1em", color: "white", backgroundColor: "#dbd8ae", marginBottom: "1em", marginTop: "4em"}}>
                {bio}
              </Paper>
            </Col>
          </Row>
          <Row>
            <Col>
              <Paper style={{ padding: "1em", color: "white", backgroundColor: "#f0b67f", marginBottom: "1em"}}>
                {bio}
              </Paper>
            </Col>
          </Row>
          <Row>
            <Col>
              <Paper style={{ padding: "1em", color: "white", backgroundColor: "#fe5f55", marginBottom: "1em"}}>
                {bio}
              </Paper>
            </Col>
          </Row>
          <Row>
            <Col>
              <Paper style={{ padding: "1em", color: "white", backgroundColor: "#cca43b"}}>
                {bio}
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