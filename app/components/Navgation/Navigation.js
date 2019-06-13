import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import routes from '../../constants/routes';
import styles from './Navigation.css';
import Style from './Style';
import home from './images/home.png';
import help from './images/help.png';
import search from './images/search.png';
import settings from './images/settings.png';
import trackers from './images/trackers.png';
import addTrackers from './images/addtracker.png';

type Props = {};

class Navigation extends Component<Props> {
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
        <div className={styles.containerLeft}>
          <ul className={styles.ul}>
            <NavLink to={routes.HOME} className={styles.li} exact>
              <img className={styles.shape} alt="d" src={home} />
            </NavLink>
            <NavLink to={routes.TRACKERS} className={styles.li} exact>
              <img className={styles.shape} alt="d" src={trackers} />
            </NavLink>
            <NavLink to={routes.CREATEDREAM} className={styles.li} exact>
              <img className={styles.shape} alt="" src={addTrackers} />
            </NavLink>
            <li className={styles.li}>
              <img className={styles.shape} alt="d" src={search} />
            </li>
            <li className={styles.li}>
              <img className={styles.shape} alt="d" src={settings} />
            </li>
            <li className={styles.li}>
              <img className={styles.shape} alt="d" src={help} />
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
Navigation.propTypes = {};

export default withStyles(Style)(Navigation);
