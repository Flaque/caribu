import React from 'react';
import { render } from 'react-dom';
import './styles/app.global.css';
import './styles/old.global.css';
import './styles/skeleton.global.css';
import HTMLRenderer from './components/html_renderer.js';

render(
  <div>
    <HTMLRenderer html={'jilji'} css={''}/>
  </div>,
  document.getElementById('root')
);
