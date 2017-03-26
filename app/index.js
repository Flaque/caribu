import React from 'react';
import { render } from 'react-dom';
import './styles/app.global.css';
import './styles/old.global.css';
import './styles/skeleton.global.css';
import HTMLRenderer from './components/html_renderer.js';
import DraggableHeader from './components/draggable_header/draggable_header.js'

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
