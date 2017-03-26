import React from 'react';
import { render } from 'react-dom';
import 'app.global.css';
import 'old.global.css';
import 'skeleton.global.css';
import HTMLRenderer from 'html_renderer.js';
import DraggableHeader from 'draggable_header/draggable_header.js'

function App(props) {
  return (
    <div id="app">
      <DraggableHeader />
      <HTMLRenderer html={'jilji'} css={''}/>
    </div>
  )
}

render(
  <App />,
  document.getElementById('root')
);
