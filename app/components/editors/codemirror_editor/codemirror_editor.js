/**
 * A wrapper around CodeMirror that lets us update and do
 * fancy shmancy code stuffs.
 */
import React from 'react'
import CodeMirror from 'react-codemirror'

// Funky loading so that we ignore css modules
// See http://bit.ly/2o6MkVp for more.
import '!style-loader!css-loader!codemirror/lib/codemirror.css'
import '!style-loader!css-loader!./codemirror_editor.css'

const editorOptions = {
  lineNumbers: true
}

class CodeMirrorEditor extends React.Component {

  constructor(props) {
    super(props)
    this.state = { code: this.props.code }
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

export default CodeMirrorEditor
