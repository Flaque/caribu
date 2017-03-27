import React from 'react';
import { render } from 'react-dom';
import './app.global.css';
import Sidebar from './components/sidebar/Sidebar.js'

render(
  <div>
    <Sidebar/>
  </div>,
  document.getElementById('root')
);
