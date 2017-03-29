import React from 'react';
import { render } from 'react-dom';
import MenuItemAdd from './MenuItemAdd.js'
import MenuItem from './MenuItem.js'
import styles from './sidebar.css'

class Sidebar extends React.Component {
  render() {
    return (
      <div id={styles.sidebar}>
        <ul className={styles.menu}>
          <MenuItemAdd/>
          <MenuItem name="test.html"/>
        </ul>
      </div>
    );
  }
}

export default Sidebar
