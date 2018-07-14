import React from 'react';
import PropTypes from 'prop-types'

import { Grid, Paper, withStyles } from '@material-ui/core'
import { Container, Row, Col } from 'react-grid-system'

import {about} from '../../loremIpsum'
import profile from '../profile.jpg'


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

class About extends React.Component {

    render() {
      const { classes } = this.props

      return (
        <Container fluid style={{ marginTop: "8em"}}>
          <Row>
            <Col>
              <Paper style={{ padding: "1em"}}>
                About Fiona
              </Paper>
              <Paper style={{ padding: "1em"}}>
                {about}
              </Paper>
            </Col>
            <Col>
              {<img src={profile} title="fiona-profile"/>}
            </Col>
          </Row>
        </Container>
      )
    }
  }

  About.propTypes = {
    classes: PropTypes.object.isRequired
  }
  
  export default withStyles(styles)(About);