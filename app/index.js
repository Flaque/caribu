import React from 'react';
import { render } from 'react-dom';
import './app.global.css';
import HTMLRenderer from './components/html_renderer.js';

render(
  <div> 
    <HTMLRenderer html={'jilji'} css={''}/>
  </div>,
  document.getElementById('root')
);
