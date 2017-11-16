import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import NiceOneBud from './NiceOneBud';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<NiceOneBud />, document.getElementById('root'));

registerServiceWorker();