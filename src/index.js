import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import {createStore,applyMiddleware} from 'redux';
import rootReducer from './reducers';
import ErrorComp from './ErrorComp'

const store = createStore(rootReducer,applyMiddleware(thunk));

ReactDOM.render(
<Provider store={store}>
	<ErrorComp>
    <App />
	</ErrorComp>
</Provider>, document.getElementById('root'));
