import React from 'react';
import styles from './html_renderer.css'


/**
 * Returns a json object that REACT needs to render stuff
 * dangerously.
 *
 * @param {*} rawHTML - the html to be inserted dangerously
 */
function getDangerousHTML(rawHTML){
    return {__html: rawHTML};
}

/**
 * This function will take in the raw css and html and format
 * them such that they can be inserted into an html json tag
 * for render on the frame.
 */
function composeUserHTML(html, css){
    var style = "data:text/html,<style>"+ css +"</style>";
    return encodeURI(style + html);
}

class HTMLRenderer extends React.Component{
    render(){
        return (<iframe className={styles.html_renderer} src={composeUserHTML(this.props.html, this.props.css)}/>);
    }
}

HTMLRenderer.propTypes = {
    html: React.PropTypes.string.isRequired,
    css: React.PropTypes.string.isRequired
}

export default HTMLRenderer;
