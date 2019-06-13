// @flow
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import styles from './Login.css';
import Style from './Style';

type Props = {};

class Login extends Component<Props> {
  props: Props;

  state = {
    name: '',
    password: '',
    loginsucceed: false
  };

  handleChange = name => event => {
    console.log(name);
    console.log(event.target.value);
    this.setState({
      [name]: event.target.value
    });
  };

  handleLogin = name => () => {
    this.setState({
      [name]: true
    });
  };

  render() {
    const { classes } = this.props;
    const { name, password, loginsucceed } = this.state;
    if (loginsucceed) {
      this.setState({ loginsucceed: false });
      return <Redirect to="/home" />;
    }
    return (
      <div className={styles.container} data-tid="container">
        <div className={styles.logoContainer}>
          <div className={styles.headingLable}>
            <div>A journey of a thousand miles starts with the first step…</div>
            <div className={styles.loginHeading}>Logging in.</div>
          </div>
          <div>
            <TextField
              id="standard-name"
              label="Username"
              className={classes.textField}
              InputProps={{
                className: classes.input
              }}
              value={name}
              onChange={this.handleChange('name')}
              margin="normal"
            />
          </div>
          <div>
            <TextField
              id="standard-name"
              label="Password"
              className={classes.textField}
              InputProps={{
                className: classes.input
              }}
              value={password}
              onChange={this.handleChange('password')}
              margin="normal"
            />
          </div>
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            onClick={this.handleLogin('loginsucceed')}
          >
            Login
          </Button>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(Style)(Login);
