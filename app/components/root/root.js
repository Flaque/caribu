/**
 * The top level component for Caribu.
 */
import React from 'react'
import HTMLRenderer from 'html_renderer/html_renderer.js';
import DraggableHeader from 'draggable_header/draggable_header.js'
import Editors from "editors/editors.js"
import styles from './root.css'

function Root(props) {
  return (
    <div id="app">
      <DraggableHeader />

      <div className={styles.rightSide}>
        <HTMLRenderer html={'jilji'} css={''}/>
        <Editors />
      </div>
    </div>
  )
}

export default Root
