import React from 'react';
import { render } from 'react-dom';

class MenuItem extends React.Component {
  render() {
    return (
      <li class="menu-item" value={this.props.name}>
        <div class="menu-inner"> {this.props.name} </div>
        <div class="trash circle-icon"> <i class='fa fa-trash-o'></i>
        </div>
      </li>
    );
  }
}

export default MenuItem
