import React from 'react';
import { render } from 'react-dom';
import styles from './MenuItem.css'

class MenuItem extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      editable: false,
      name: this.props.name
    }
  }

  save = () => {
    this.setState({editable: false})
    this.props.changeName(this.state.name)
  }

  onInputChange = (e) => {
    this.setState({name: e.target.value})
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
        value={this.props.name}>

        <div className={styles.menu_inner}>
          {this.state.editable ? (
              <input
                autoFocus
                onKeyPress={this.onKeyPress}
                className={styles.invisible_input}
                onChange={this.onInputChange}
                type="text" value={this.state.name}/>
            ) : (
              <span> {this.props.name} </span>
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
