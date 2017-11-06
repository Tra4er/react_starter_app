import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import {Provider} from 'react-redux';

import App from './containers/App';
import 'semantic-ui-css/semantic.min.css';
import configureStore from './store/configureStore';

import registerServiceWorker from './registerServiceWorker';

const store = configureStore();

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <Route path="/" component={App}/>
        </Provider>
    </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
