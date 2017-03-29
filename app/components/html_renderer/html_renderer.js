import React from 'react';
import styles from './html_renderer.css'

class HTMLRenderer extends React.Component{

    render(){
        return (<iframe id="output" className={styles.html_renderer}/>);
    }

    componentDidUpdate() {
      const doc = document.getElementById('output').contentWindow.document
      doc.body.innerHTML = `<style>${this.props.css}</style> ${this.props.html}`
    }
}

HTMLRenderer.propTypes = {
    html: React.PropTypes.string.isRequired,
    css: React.PropTypes.string.isRequired
}

export default HTMLRenderer;
