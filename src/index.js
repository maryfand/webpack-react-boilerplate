import React from 'react';
import {render} from 'react-dom';
import './styles/defalut.css';

import App from './App.js';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

render(<App />,document.getElementById('root'));
