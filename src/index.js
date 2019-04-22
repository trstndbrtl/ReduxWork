// Import React and serviceWorker
import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
// Import Redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
// Import Router
import { BrowserRouter } from 'react-router-dom';
// Import component and custom middleware
import App from './components/App'
import { TrackerInfo } from './middlewares/TrackerInfo';
// Store variable for middleware
const createStoreWithMiddleware = applyMiddleware(thunk, TrackerInfo)(createStore);

ReactDOM.render(
    <Provider
        store={createStoreWithMiddleware(
            reducers,
            window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__()
        )}
    >
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.querySelector("#root")
);
serviceWorker.register();