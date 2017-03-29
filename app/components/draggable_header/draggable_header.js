/**
 * A header at the top of the screen that
 * lets the user drag the electron window around,
 * even when the window is frameless.
 */
import React from 'react'
import styles from './draggable_header.css'

function DraggableHeader(props) {
  return <div className={styles.draggable}></div>
}

export default DraggableHeader
