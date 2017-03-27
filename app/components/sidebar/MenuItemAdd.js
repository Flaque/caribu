import React from 'react';
import { render } from 'react-dom';

class MenuItemAdd extends React.Component {
  render() {
    return (
      <li id="add-item" class="menu-item">
        Elements
        <div class="circle-icon">
          <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
        </div>
      </li>
    );
  }
}

export default MenuItemAdd
