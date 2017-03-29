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
        <CodeMirrorEditor code={"//html"}/>
        <CodeMirrorEditor code={"//css"}/>
      </div>
    )
  }
}

export default Editors
