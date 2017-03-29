/**
 * The top level component for Caribu.
 */
import React from 'react'
import HTMLRenderer from 'html_renderer/html_renderer.js';
import DraggableHeader from 'draggable_header/draggable_header.js'
import Editors from "editors/editors.js"
import styles from './root.css'
import Sidebar from 'sidebar/Sidebar.js'

class Root extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      html: "",
      css: ""
    }
  }

  onHTMLChange = (html) => {
    this.setState({html: html})
  }

  onCSSChange = (css) => {
    this.setState({css: css})
  }

  render() {
    return (
      <div id="app">
        <DraggableHeader />
        <Sidebar/>
        <div className={styles.rightSide}>
          <HTMLRenderer
            html={this.state.html}
            css={this.state.css}/>
          <Editors
            onHTMLChange={this.onHTMLChange}
            onCSSChange={this.onCSSChange} />
        </div>
      </div>
    )
  }
}

export default Root
