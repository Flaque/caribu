import React from 'react';
import { render } from 'react-dom';
import MenuItemAdd from './MenuItemAdd.js'
import MenuItem from './MenuItem.js'

class Sidebar extends React.Component {
  render() {
    return (
      <div id="sidebar">
        <ul class="menu">
          <MenuItemAdd/>
          <MenuItem name="test.html"/>
        </ul>
      </div>
    );
  }
}

export default Sidebar
