import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import About from '../pages/About'
import Experience from '../pages/Experience'
import Contact from '../pages/Contact'
import HomePage from '../pages/HomePage'

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    marginTop: "4em"
  },
  appcolor: {
      backgroundColor: "#8d99ae"
  }
});

class SimpleTabs extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static" className={classes.appcolor}>
          <Tabs value={value} onChange={this.handleChange}>
            <Tab label="Home" />
            <Tab label="About" />
            <Tab label="Experience" />
            <Tab label="Contact" href="#basic-tabs" />
          </Tabs>
        </AppBar>
        {value === 0 && <TabContainer><HomePage /></TabContainer>}
        {value === 1 && <TabContainer><About /></TabContainer>}
        {value === 2 && <TabContainer><Experience /></TabContainer>}
        {value === 3 && <TabContainer><Contact /></TabContainer>}
      </div>
    );
  }
}

SimpleTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTabs);