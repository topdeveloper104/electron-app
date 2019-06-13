import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import styles from './Trackers.css';
import Style from './Style';
import plusBtn from './images/plus.png';
import logo from './images/logo.png';
import routes from '../../constants/routes';

type Props = {};

class Trackers extends Component<Props> {
  props: Props;

  state = {};

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.containerCenter}>
          <div className={styles.heading}>
            Trackers
            <img src={logo} alt="" className={styles.logo} />
          </div>
          <div className={styles.contentContainer}>
            <div className={styles.trackersList}>
              <Link to={routes.TRACKER} className={styles.dreamListLable}>
                My Dream statement here like this that sometimes will have
                longer text.
              </Link>
              <Link to={routes.TRACKER} className={styles.dreamListLable}>
                My Dream statement here like this that sometimes will have
                longer text.
              </Link>
              <Link to={routes.TRACKER} className={styles.dreamListLable}>
                My Dream statement here like this that sometimes will have
                longer text.
              </Link>
              <Link to={routes.TRACKER} className={styles.dreamListLable}>
                My Dream statement here like this that sometimes will have
                longer text.
              </Link>
              <Link to={routes.TRACKER} className={styles.dreamListLable}>
                My Dream statement here like this that sometimes will have
                longer text.
              </Link>
              <Link to={routes.TRACKER} className={styles.dreamListLable}>
                My Dream statement here like this that sometimes will have
                longer text.
              </Link>
            </div>
            <div className={styles.contentContainerRight}>
              <div className={styles.addTrackersBtn}>
                <img className={styles.addBtn} alt="" src={plusBtn} />
                <span style={{ marginLeft: '18px' }}>ADD A TRACKER</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Trackers.propTypes = {};

export default withStyles(Style)(Trackers);
