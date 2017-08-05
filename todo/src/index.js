import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import todos from './reducers/todos';
import { createStore } from 'redux';

const store = createStore(todos);

ReactDOM.render(
    <Provider store={store}>
	<App /> 
	</Provider>, document.getElementById('root')
	);
registerServiceWorker();
