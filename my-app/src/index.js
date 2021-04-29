import React from 'react';
import store from "./redux/redux-store";
import App from "./App";
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
    <BrowserRouter>
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>
    </BrowserRouter>,
    document.getElementById('root')
);
