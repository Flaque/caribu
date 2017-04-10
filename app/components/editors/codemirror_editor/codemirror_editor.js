/**
 * A wrapper around CodeMirror that lets us update and do
 * fancy shmancy code stuffs.
 */
import React from 'react'
import CodeMirror from 'react-codemirror'

import 'codemirror/mode/htmlmixed/htmlmixed.js'
import 'codemirror/mode/css/css.js'


// Funky loading so that we ignore css modules
// See http://bit.ly/2o6MkVp for more.
import '!style-loader!css-loader!codemirror/lib/codemirror.css'


import '!style-loader!css-loader!./codemirror_editor.css'

const editorOptions = {
  lineNumbers: true,
  lineWrapping: true
}

class CodeMirrorEditor extends React.Component {

  constructor(props) {
    super(props)
    this.state = { code: "" }
  }

  onChange = (code) => {
    this.setState({code: code})
    this.props.updateCode(code)
  }

  options = () => {
    return Object.assign(editorOptions, {
      mode: this.props.mode
    })
  }

  render() {
    return (
      <CodeMirror
        value={this.state.code}
        onChange={this.onChange}
        options={this.options()} />
    )
  }
}

export default CodeMirrorEditor
