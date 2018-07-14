import React from 'react'
import PropTypes from 'prop-types'

import { Grid, Paper, withStyles } from '@material-ui/core'
import { Container, Row, Col } from 'react-grid-system'

import {education1, education2, education3, education4} from '../../loremIpsum'

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

class Experience extends React.Component {

    render() {
      const { classes } = this.props

      return (
        <Container fluid style={{ marginTop: "8em"}}>
          <Row>
            <Col>
              <Paper>
                Education
              </Paper>
              <Paper style={{ padding: "1em"}}>
                {education1} <br />
                {education2} <br />
                {education3} <br />
                {education4}
              </Paper>
            </Col>
          </Row>
        </Container>
      )
    }
  }

  Experience.propTypes = {
    classes: PropTypes.object.isRequired
  }
  
  export default withStyles(styles)(Experience);