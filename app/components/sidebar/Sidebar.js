import React from 'react';
import { render } from 'react-dom';
import MenuItemAdd from './MenuItemAdd.js'
import MenuItem from './MenuItem.js'
import styles from './sidebar.css'

class Sidebar extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      name: "test.html"
    }
  }

  changeName = (name) => {
    this.setState({name : name})
  }

  render() {
    return (
      <div id={styles.sidebar}>
        <ul className={styles.menu}>
          <MenuItemAdd/>
          <MenuItem name={this.state.name}
            changeName={this.changeName}/>
        </ul>
      </div>
    );
  }
}

export default Sidebar
