import React from 'react';

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
    var styleTag = "<style>" + css + "</style>";
    return getDangerousHTML(css + html);
}

class HTMLRenderer extends React.Component{
    render(){
        return (<iframe dangerouslySetInnerHTML={composeUserHTML(this.props.html, this.props.css)}>
        </iframe>)
    }
}

HTMLRenderer.propTypes = {
    html: React.PropTypes.string.isRequired,
    css: React.PropTypes.string.isRequired
}

export default HTMLRenderer;