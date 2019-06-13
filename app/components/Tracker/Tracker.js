// @flow
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import styles from './Tracker.css';
import Style from './Style';
import logo from './images/logo.png';
import reminderBell from './images/notificationBell.svg';
import helpCircle from './images/helpCircle.svg';
import checkboxMarkedCircle from './images/checkboxMarkedCircle.svg';

type Props = {};

class Tracker extends Component<Props> {
  props: Props;

  state = {
    radioValue: 3
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { classes } = this.props;
    const { radioValue } = this.state;
    return (
      <div className={styles.container}>
        <div className={styles.containerCenter}>
          <div className={styles.heading}>
            <img src={logo} alt="" className={styles.logo} />
          </div>
          <div className={styles.contentContainer}>
            <div className={styles.trackersList}>
              <div className={styles.heading}>
                My Dream statement here like this that sometimes will have
                longer text.
              </div>
              <br />
              <div className={styles.cardBase}>
                <Card className={classes.card}>
                  <CardActionArea>
                    <CardContent>
                      <div className={styles.cardSuccess}>Success</div>
                      <RadioGroup
                        aria-label="Gender"
                        name="gender1"
                        className={classes.group}
                        value={radioValue}
                        onChange={this.handleChange}
                      >
                        <div className={classes.radioLable}>
                          <FormControlLabel
                            value="1"
                            control={<Radio />}
                            label="something here to check off"
                          />
                        </div>
                        <div className={classes.radioLable}>
                          <FormControlLabel
                            value="2"
                            control={<Radio />}
                            label="something here to check off 1"
                          />
                        </div>
                        <div className={classes.radioLable}>
                          <FormControlLabel
                            value="3"
                            control={<Radio />}
                            label="something here to check off 1"
                          />
                        </div>
                      </RadioGroup>
                      <br />
                      <br />
                      <br />
                    </CardContent>
                  </CardActionArea>
                </Card>
              </div>
              <div className={styles.cardBase}>
                <Card className={classes.card}>
                  <CardActionArea>
                    <CardContent>
                      <div className={`${styles.cardSuccess} ${styles.learn}`}>
                        Learn
                      </div>
                      <div className={classes.group}>
                        <a className={styles.link}>
                          http://linkhere.com/tiewet
                        </a>
                      </div>
                      <Typography
                        className={classes.itemTitle}
                        gutterBottom
                        variant="h5"
                        component="h2"
                      >
                        Heading within section
                      </Typography>
                      <RadioGroup
                        aria-label="Gender"
                        name="gender1"
                        value={radioValue}
                        onChange={this.handleChange}
                      >
                        <div
                          className={`${classes.radioLable} ${
                            classes.paddingBottom10
                          }`}
                        >
                          <FormControlLabel
                            value="female"
                            control={<Radio />}
                            label="something here to check off"
                          />
                          <div className={styles.linkIn}>
                            <a className={`${styles.link}`}>
                              http://linkhere.com/tiewet
                            </a>
                          </div>
                        </div>
                      </RadioGroup>
                      <Typography
                        className={classes.itemTitle}
                        gutterBottom
                        variant="h5"
                        component="h2"
                      >
                        Another Heading
                      </Typography>
                      <Typography
                        className={classes.headingIn}
                        gutterBottom
                        variant="h5"
                        component="h2"
                      >
                        Something here
                      </Typography>
                      <br />
                      <br />
                      <br />
                    </CardContent>
                  </CardActionArea>
                </Card>
              </div>
              <div className={styles.cardBase}>
                <Card className={classes.card}>
                  <CardActionArea>
                    <CardContent>
                      <div className={`${styles.cardSuccess} ${styles.plan}`}>
                        Plan
                      </div>
                      <div className={styles.listItem}>
                        <Typography
                          className={`${classes.itemTitle} ${classes.listItem}`}
                          gutterBottom
                          variant="h5"
                          component="h2"
                        >
                          Milestones - One
                          <div
                            className={`${styles.milestoneStatus} ${
                              styles.right
                            }`}
                          >
                            COMMIT
                          </div>
                        </Typography>
                        <RadioGroup
                          aria-label="Gender"
                          name="gender1"
                          value={radioValue}
                          onChange={this.handleChange}
                        >
                          <div className={classes.radioLable}>
                            <FormControlLabel
                              value="female"
                              control={<Radio />}
                              label="something here to check off"
                            />
                            <FormControlLabel
                              style={{ marginLeft: 30, width: '100%' }}
                              value="female"
                              control={<Radio />}
                              label="something here to check off"
                            />
                          </div>
                          <div className={classes.radioLable}>
                            <FormControlLabel
                              value="male"
                              control={<Radio />}
                              label="something here to check off 1"
                            />
                          </div>
                        </RadioGroup>
                      </div>
                      <div className={styles.listItem}>
                        <Typography
                          className={`${classes.itemTitle} ${classes.listItem}`}
                          gutterBottom
                          variant="h5"
                          component="h2"
                        >
                          Milestones - Two
                          <div
                            className={`${styles.milestoneStatus} ${
                              styles.right
                            }`}
                          >
                            I’m committed
                          </div>
                        </Typography>
                        <RadioGroup
                          aria-label="Gender"
                          name="gender1"
                          value={radioValue}
                          onChange={this.handleChange}
                        >
                          <div className={classes.radioLable}>
                            <FormControlLabel
                              value="female"
                              control={<Radio />}
                              label="something here to check off"
                            />
                          </div>
                          <div className={classes.radioLable}>
                            <FormControlLabel
                              value="male"
                              control={<Radio />}
                              label="something here to check off 1"
                            />
                          </div>
                          <div className={classes.radioLable}>
                            <FormControlLabel
                              value="female"
                              control={<Radio />}
                              label="something here to check off"
                            />
                          </div>
                          <div className={classes.radioLable}>
                            <FormControlLabel
                              value="male"
                              control={<Radio />}
                              label="something here to check off 1"
                            />
                          </div>
                        </RadioGroup>
                      </div>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </div>
              <div className={styles.cardBase}>
                <Card className={classes.card}>
                  <CardActionArea>
                    <CardContent>
                      <div
                        className={`${styles.cardSuccess} ${styles.progress}`}
                      >
                        Progress
                      </div>
                      <div className={styles.listItem}>
                        <Typography
                          className={`${classes.itemTitle} ${classes.listItem}`}
                          gutterBottom
                          variant="h5"
                          component="h2"
                        >
                          Milestones achieved
                        </Typography>
                        <RadioGroup
                          aria-label="Gender"
                          name="gender1"
                          value={radioValue}
                          onChange={this.handleChange}
                        >
                          <div className={classes.radioLable}>
                            <FormControlLabel
                              value="female"
                              control={<Radio />}
                              label="something here to check off"
                            />
                            <div className={styles.radioStatus}>9/15/2018</div>
                          </div>
                          <div className={classes.radioLable}>
                            <FormControlLabel
                              value="male"
                              control={<Radio />}
                              label="something here to check off 1"
                            />
                            <div className={styles.radioStatus}>9/15/2018</div>
                          </div>
                        </RadioGroup>
                      </div>
                      <div className={styles.listItem}>
                        <Typography
                          className={`${classes.itemTitle} ${classes.listItem}`}
                          gutterBottom
                          variant="h5"
                          component="h2"
                        >
                          Milestones achieved
                        </Typography>
                        <RadioGroup
                          aria-label="Gender"
                          name="gender1"
                          value={radioValue}
                          onChange={this.handleChange}
                        >
                          <div className={classes.radioLable}>
                            <FormControlLabel
                              value="female"
                              control={<Radio />}
                              label="something here to check off"
                            />
                            <div className={styles.radioStatus}>9/15/2018</div>
                          </div>
                          <div className={classes.radioLable}>
                            <FormControlLabel
                              value="male"
                              control={<Radio />}
                              label="something here to check off 1"
                            />
                            <div className={styles.radioStatus}>9/15/2018</div>
                          </div>
                        </RadioGroup>
                      </div>
                    </CardContent>
                  </CardActionArea>
                </Card>
                <br />
                <br />
                <br />
              </div>
            </div>
            <div className={styles.contentContainerRight}>
              <div className={styles.progressHeading}>Progress</div>
              <div className={styles.progressBg}>
                <div className={styles.progressCompleted} />
              </div>
              <div className={styles.progressHeading}>Review Cycle</div>
              <div className={styles.progressType}>Daily</div>
              <div style={{ marginTop: 15, position: 'relative' }}>
                <span className={styles.bellIcon}>
                  <img src={reminderBell} alt="" />
                </span>
                <span className={styles.reminder}>Review Due Today</span>
                <span className={styles.infoIcon}>
                  <img src={helpCircle} alt="" />
                </span>
              </div>
              <div className={styles.progressType}>
                Last Reviewed 09.05.2018
              </div>
              <div className={styles.milestonesDone}>
                <div className={styles.milestoneStatus}>
                  <span className={styles.checkboxMarkedCircle}>
                    <img src={checkboxMarkedCircle} alt="" />
                  </span>
                  <span className={styles.milestoneStatusHeading}>Done</span>
                </div>
                <div>
                  <div className={styles.milestoneTextLeft}>8/18</div>
                  <div className={styles.milestoneTextRight}>
                    Completed certain commitment
                  </div>
                </div>
                <div>
                  <div className={styles.milestoneTextLeft}>8/18</div>
                  <div className={styles.milestoneTextRight}>
                    Completed certain commitment
                  </div>
                </div>
                <div>
                  <div className={styles.milestoneTextLeft}>8/18</div>
                  <div className={styles.milestoneTextRight}>
                    Completed certain commitment
                  </div>
                </div>
              </div>
              <div className={styles.notes}>Notes / Scratch Pad</div>
              <br />
              <br />
              <br />
              <br />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Tracker.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(Style)(Tracker);
