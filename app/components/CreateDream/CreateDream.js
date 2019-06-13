// @flow
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import styles from './CreateDream.css';
import Style from './Style';
// import Navigation from '../Navgation/Navigation';

type Props = {};

class CreateDream extends Component<Props> {
  props: Props;

  state = {
    dreamText: ''
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  render() {
    const { classes } = this.props;
    const { dreamText } = this.state;
    return (
      <div className={styles.container}>
        {/* <Navigation /> */}
        <div className={styles.containerCenter}>
          <div className={styles.heading}>Start a tracker</div>
          <TextField
            style={{ width: '90%' }}
            id="dreamInput"
            label="What’s your dream?"
            className={classes.textField}
            InputProps={{
              className: classes.input
            }}
            value={dreamText}
            onChange={this.handleChange('dreamText')}
            margin="normal"
          />
          <div className={styles.dreamListLable}>
            What needs to happen to make you dream a success?
          </div>
          <div className={styles.dreamListLable}>
            What will you need to learn? Add notes, links, etc.
          </div>
          <div className={styles.dreamListLable}>Creat some Milestones</div>
          <div className={styles.dreamListLable}>Make Commitments</div>
          <div className={styles.dreamListLable}>
            How often do you want to review your commitments?
          </div>
          <div className={styles.dreamListLable}>Who will be on the team?</div>
          <Button variant="outlined" className={classes.buttonOutline}>
            START OVER
          </Button>
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
          >
            CREATE TRACKER
          </Button>
        </div>
      </div>
    );
  }
}

CreateDream.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(Style)(CreateDream);
