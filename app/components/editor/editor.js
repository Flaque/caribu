import CodeMirror from 'react-codemirror'
import 'codemirror/lib/codemirror.css'
import React from 'react'

const editorOptions = {
  lineNumbers: true
}

class Editor extends React.Component {

  getInitialState() {
    return { code: "//Code" }
  }

  updateCode = (newCode) => {
    this.setState({
      code: newCode
    })
  }

  render() {
    return (
      <CodeMirror
        value={this.state.code}
        onChange={this.updateCode}
        options={editorOptions} />
    )
  }
}

export default Editor
