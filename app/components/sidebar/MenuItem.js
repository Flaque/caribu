import React from 'react';
import { render } from 'react-dom';
import styles from './MenuItem.css'

class MenuItem extends React.Component {
  render() {
    return (
      <li className={styles.menu_item} value={this.props.name}>
        <div className={styles.menu_inner}> {this.props.name} </div>
        <div className={styles.circle_icon}> <i className='fa fa-trash-o'></i>
        </div>
      </li>
    );
  }
}

export default MenuItem
