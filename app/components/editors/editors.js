import React from 'react'
import CodeMirrorEditor from './codemirror_editor/codemirror_editor.js'

class Editors extends React.Component {

  render() {
    return (
      <div>
        <CodeMirrorEditor code={"//html"}/>
        <CodeMirrorEditor code={"//css"}/>
      </div>
    )
  }
}

export default Editors
