import React from 'react';
import ReactDOM from 'react-dom'
import Board from './Board'
import './index.css'

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Board />, document.getElementById('root'));
registerServiceWorker();
