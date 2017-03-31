import React from 'react';
import { render } from 'react-dom';
import styles from './MenuItem.css'

class MenuItem extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      editable: false,
      item: this.props.item
    }
  }

  save = () => {
    this.setState({editable: false})
    this.props.changeItem(this.state.item)
  }

  onInputChange = (e) => {
    const name = e.target.value
    this.setState((prevState) => {
      prevState.item.name = name
    })
  }

  onKeyPress = (e) => {
    if (e.key === "Enter") this.save()
  }

  onDoubleClick = () => {
    console.log("Double Click")
    this.setState({editable: true})
  }

  onClick = () => {
    console.log("clicked")
  }

  render() {
    return (
      <li
        onClick={this.onClick}
        onDoubleClick={this.onDoubleClick}
        className={styles.menu_item}
        value={this.props.item.name}>

        <div className={styles.menu_inner}>
          {this.state.editable ? (
              <input
                autoFocus
                onKeyPress={this.onKeyPress}
                className={styles.invisible_input}
                onChange={this.onInputChange}
                type="text" value={this.state.item.name}/>
            ) : (
              <span> {this.props.item.name} </span>
            )
          }
        </div>
        <div className={styles.circle_icon}> <i className='fa fa-trash-o'></i>
        </div>
      </li>
    );
  }
}

export default MenuItem
