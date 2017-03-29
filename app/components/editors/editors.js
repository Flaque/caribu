/**
 * The top level component for the editors
 */
import React from 'react'
import CodeMirrorEditor from './codemirror_editor/codemirror_editor.js'
import styles from './editors.css'

class Editors extends React.Component {

  render() {
    return (
      <div className={styles.editors}>
        <CodeMirrorEditor mode="htmlmixed" updateCode={this.props.onHTMLChange}/>
        <CodeMirrorEditor mode="css" updateCode={this.props.onCSSChange}/>
      </div>
    )
  }
}

export default Editors
