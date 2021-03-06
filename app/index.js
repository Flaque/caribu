/**
 * The main renderer file.
 */
import React from 'react';
import { render } from 'react-dom';
import 'app.global.css';
import 'old.global.css';
import 'skeleton.global.css';
import Root from 'root/root.js'

render(
  <Root />,
  document.getElementById('root')
);
