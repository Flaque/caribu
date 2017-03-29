import React from 'react';
import { render } from 'react-dom';
import styles from './MenuItem.css'

class MenuItemAdd extends React.Component {
  render() {
    return (
      <li id={styles.add_item} className={styles.menu_item}>
        Add Element
        <div className={styles.circle_icon}>
          <i className='fa fa-pencil-square-o' aria-hidden="true"></i>
        </div>
      </li>
    );
  }
}

export default MenuItemAdd
