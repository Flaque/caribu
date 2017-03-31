import React from 'react';
import { render } from 'react-dom';
import MenuItemAdd from './MenuItemAdd.js'
import MenuItem from './MenuItem.js'
import styles from './sidebar.css'

class Sidebar extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      items: [{name: "test.html"}, {name: "cats"}]
    }
  }

  changeItem = (item, index) => {
    this.setState((prevState) => {
      prevState.items[index] = item
    })
  }

  addItem = () => {
    this.setState((prevState) => {
      prevState.items.push({name: "untitled", new: true})
    })
  }

  render() {
    const items = this.state.items.map((item, index) => {
      return <MenuItem
        item={item}
        index={index}
        key={index}
        changeItem={this.changeItem}/>
    })

    return (
      <div id={styles.sidebar}>
        <ul className={styles.menu}>
          <MenuItemAdd onClick={this.addItem}/>
          {items}
        </ul>
      </div>
    );
  }
}

export default Sidebar
