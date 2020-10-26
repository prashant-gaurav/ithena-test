import React from 'react';
import ReactDOM from 'react-dom';
import './assets/fonts/Ubuntu-Medium.ttf'
import './assets/fonts/Nunito-Light.ttf'
import './assets/fonts/Nunito-Regular.ttf'
import './assets/fonts/Nunito-Bold.ttf'
import './assets/css/index.css';
import './assets/css/button.css';
import Roure from './Roures';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <React.StrictMode>
        <Roure/>
    </React.StrictMode>,
    document.getElementById('prashant')
);
serviceWorker.unregister();
