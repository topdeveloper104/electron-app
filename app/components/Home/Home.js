import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import styles from './Home.css';
import logo from './images/logo.png';
import plusBtn from './images/plus.png';
import reminderBell from './images/notificationBell.svg';
import Style from './Style';

type Props = {};

class Home extends Component<Props> {
  props: Props;

  state = {
    radioValue: '',
    age: 10,
    openModal: false
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  opneModal = name => event => {
    event.preventDefault();
    this.setState({ [name]: true });
  };

  handleClose = name => () => {
    this.setState({ [name]: false });
  };

  stopPropagation = () => event => {
    event.stopPropagation();
  };

  render() {
    const { classes } = this.props;
    const { radioValue, age, openModal } = this.state;
    return (
      <div className={styles.container}>
        <div className={styles.containerCenter}>
          <img src={logo} alt="" className={styles.logo} />
          <div className={styles.contentContainer}>
            <div className={styles.trackersList}>
              <Card
                className={classes.card}
                onClick={this.opneModal('openModal')}
              >
                <CardActionArea>
                  <CardContent>
                    <div className={styles.selectContainer}>
                      <Select
                        onClick={this.stopPropagation()}
                        classes={{
                          root: classes.selectBox
                        }}
                        value={age}
                        onChange={this.handleChange}
                        inputProps={{
                          name: 'age',
                          id: 'age-simple'
                        }}
                      >
                        <MenuItem value={10}>SHOW 3-DAYS</MenuItem>
                        <MenuItem value={20}>SHOW 5-DAYS</MenuItem>
                        <MenuItem value={30}>SHOW 10-DAYS</MenuItem>
                      </Select>
                    </div>
                    <Typography
                      className={classes.title}
                      gutterBottom
                      variant="h5"
                      component="h2"
                    >
                      Sept. 9
                    </Typography>
                    <div className={styles.listItem}>
                      <Typography
                        className={classes.itemTitle}
                        gutterBottom
                        variant="h5"
                        component="h2"
                      >
                        Dream 1 Title
                      </Typography>
                      <RadioGroup
                        onClick={this.stopPropagation()}
                        aria-label="Gender"
                        name="gender1"
                        className={classes.group}
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
                          <div className={styles.radioStatus}>Blocked</div>
                        </div>
                      </RadioGroup>
                    </div>
                    <div className={styles.listItem}>
                      <Typography
                        className={classes.itemTitle}
                        gutterBottom
                        variant="h5"
                        component="h2"
                      >
                        Dream 1 Title
                      </Typography>
                      <div style={{ marginTop: 15 }}>
                        <span className={styles.bellIcon}>
                          <img src={reminderBell} alt="" />
                        </span>
                        <span className={styles.reminder}>
                          Review Due Today
                        </span>
                      </div>
                      <RadioGroup
                        onClick={this.stopPropagation()}
                        aria-label="Gender"
                        name="gender1"
                        className={classes.group}
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
                          <div className={styles.radioStatusStarted}>
                            Started
                          </div>
                        </div>
                      </RadioGroup>
                    </div>
                  </CardContent>
                </CardActionArea>
              </Card>
              <Card
                style={{
                  margin: 15,
                  marginRight: 30,
                  backgroundColor: '#e8e8e8'
                }}
                onClick={this.opneModal('openModal')}
                className={classes.card}
              >
                <CardActionArea>
                  <CardContent>
                    <div className={styles.selectContainer}>
                      <Select
                        onClick={this.stopPropagation()}
                        classes={{
                          root: classes.selectBox
                        }}
                        value={age}
                        onChange={this.handleChange}
                        inputProps={{
                          name: 'age',
                          id: 'age-simple'
                        }}
                      >
                        <MenuItem value={10}>SHOW 3-DAYS</MenuItem>
                        <MenuItem value={20}>SHOW 5-DAYS</MenuItem>
                        <MenuItem value={30}>SHOW 10-DAYS</MenuItem>
                      </Select>
                    </div>
                    <Typography
                      className={classes.title}
                      gutterBottom
                      variant="h5"
                      component="h2"
                    >
                      Sept. 9
                    </Typography>
                    <div className={styles.listItem}>
                      <Typography
                        className={classes.itemTitle}
                        gutterBottom
                        variant="h5"
                        component="h2"
                      >
                        Dream 1 Title
                      </Typography>
                      <RadioGroup
                        onClick={this.stopPropagation()}
                        aria-label="Gender"
                        name="gender1"
                        className={classes.group}
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
                          <div className={styles.radioStatus}>Blocked</div>
                        </div>
                      </RadioGroup>
                    </div>
                    <div className={styles.listItem}>
                      <Typography
                        className={classes.itemTitle}
                        gutterBottom
                        variant="h5"
                        component="h2"
                      >
                        Dream 1 Title
                      </Typography>
                      <div style={{ marginTop: 15 }}>
                        <span className={styles.bellIcon}>
                          <img src={reminderBell} alt="" />
                        </span>
                        <span className={styles.reminder}>
                          Review Due Today
                        </span>
                      </div>
                      <RadioGroup
                        onClick={this.stopPropagation()}
                        aria-label="Gender"
                        name="gender1"
                        className={classes.group}
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
                          <div className={styles.radioStatus}>Blocked</div>
                        </div>
                      </RadioGroup>
                    </div>
                  </CardContent>
                </CardActionArea>
              </Card>
              <Card
                style={{
                  margin: 15,
                  marginRight: 30,
                  backgroundColor: '#e8e8e8'
                }}
                onClick={this.opneModal('openModal')}
                className={classes.card}
              >
                <CardActionArea>
                  <CardContent>
                    <div className={styles.selectContainer}>
                      <Select
                        onClick={this.stopPropagation()}
                        classes={{
                          root: classes.selectBox
                        }}
                        value={age}
                        onChange={this.handleChange}
                        inputProps={{
                          name: 'age',
                          id: 'age-simple'
                        }}
                      >
                        <MenuItem value={10}>SHOW 3-DAYS</MenuItem>
                        <MenuItem value={20}>SHOW 5-DAYS</MenuItem>
                        <MenuItem value={30}>SHOW 10-DAYS</MenuItem>
                      </Select>
                    </div>
                    <Typography
                      className={classes.title}
                      gutterBottom
                      variant="h5"
                      component="h2"
                    >
                      Sept. 9
                    </Typography>
                    <div className={styles.listItem}>
                      <Typography
                        className={classes.itemTitle}
                        gutterBottom
                        variant="h5"
                        component="h2"
                      >
                        Dream 1 Title
                      </Typography>
                      <RadioGroup
                        onClick={this.stopPropagation()}
                        aria-label="Gender"
                        name="gender1"
                        className={classes.group}
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
                          <div className={styles.radioStatus}>Blocked</div>
                        </div>
                      </RadioGroup>
                    </div>
                    <div className={styles.listItem}>
                      <Typography
                        className={classes.itemTitle}
                        gutterBottom
                        variant="h5"
                        component="h2"
                      >
                        Dream 1 Title
                      </Typography>
                      <div style={{ marginTop: 15 }}>
                        <span className={styles.bellIcon}>
                          <img src={reminderBell} alt="" />
                        </span>
                        <span className={styles.reminder}>
                          Review Due Today
                        </span>
                      </div>
                      <RadioGroup
                        onClick={this.stopPropagation()}
                        aria-label="Gender"
                        name="gender1"
                        className={classes.group}
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
                          <div className={styles.radioStatus}>Blocked</div>
                        </div>
                      </RadioGroup>
                    </div>
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>
            <div className={styles.contentContainerRight}>
              <div className={styles.addwidgetBtn}>
                <img className={styles.addBtn} alt="" src={plusBtn} />
                <span style={{ marginLeft: '18px' }}>ADD A TRACKER</span>
              </div>
              <div className={styles.notes}>Notes / Scratch Pad</div>
              <div className={styles.watch}>
                <span>2:25</span>
                <span className={styles.watchShape} />
              </div>
            </div>
            <Dialog
              fullScreen
              style={{
                margin: 10,
                marginLeft: 50,
                marginTop: 27,
                height: '90vh'
              }}
              open={openModal}
              onClose={this.handleClose}
              aria-labelledby="scroll-dialog-title"
            >
              <div className={styles.popupHeader} />
              <Button
                variant="fab"
                className={classes.closePopUp}
                onClick={this.handleClose('openModal')}
              >
                X
              </Button>
              <DialogContent>
                <div className={styles.contentContainer}>
                  <div className={styles.popupLeft}>
                    <div className={styles.listItem}>
                      <Typography
                        className={classes.itemTitle}
                        gutterBottom
                        variant="h5"
                        component="h2"
                      >
                        Milestone - Two
                        <div className={styles.milestoneStatus}>Commited</div>
                      </Typography>
                      <RadioGroup
                        aria-label="Gender"
                        name="gender1"
                        style={{ width: '100%' }}
                        className={classes.group}
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
                            style={{ marginLeft: 50, width: '100%' }}
                            value="female"
                            control={<Radio />}
                            label="something here to check off"
                          />
                          <FormControlLabel
                            style={{ marginLeft: 50, width: '100%' }}
                            value="female"
                            control={<Radio />}
                            label="something here to check off"
                          />
                        </div>
                        <div className={classes.radioLable}>
                          <FormControlLabel
                            value="female"
                            control={<Radio />}
                            label="something here to check off"
                          />
                          <FormControlLabel
                            style={{ marginLeft: 50, width: '100%' }}
                            value="female"
                            control={<Radio />}
                            label="something here to check off"
                          />
                        </div>
                        <FormControlLabel
                          value="female"
                          control={<Radio />}
                          label="something here to check off"
                        />
                        <div className={classes.radioLable}>
                          <div className={classes.radioLable}>
                            <FormControlLabel
                              className={classes.radioControlLable}
                              value="male"
                              control={<Radio />}
                              label="something here to check off 1"
                            />
                            <div className={styles.radioStatus}>Blocked</div>
                          </div>
                          <FormControlLabel
                            value="female"
                            control={<Radio />}
                            label="something here to check off"
                          />
                        </div>
                      </RadioGroup>
                    </div>
                  </div>
                  <div className={styles.contentContainerRight}>
                    <div className={styles.notesTitle}>NOTES</div>
                    <div className={styles.popUpNotes}>
                      Did you hurt your head? Okay, alright, I’ll prove it to
                      you. Look at my driver’s license, expires 1987. Look at my
                      birthday, for crying out load I haven’t even been born
                      yet.
                    </div>
                    <div className={styles.popUpNotes}>
                      Did you hurt your head? Okay, alright, I’ll prove it to
                      you. Look at my driver’s license, expires 1987. Look at my
                      birthday, for crying out load I haven’t even been born
                      yet.
                    </div>
                    <div className={styles.popUpNotes}>
                      Did you hurt your head? Okay, alright, I’ll prove it to
                      you. Look at my driver’s license, expires 1987. Look at my
                      birthday, for crying out load I haven’t even been born
                      yet.
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(Style)(Home);
