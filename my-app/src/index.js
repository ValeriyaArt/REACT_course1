import React from 'react';
import store from "./redux/redux-store";
import App from "./App";
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import SamuraiApp from "./App";

ReactDOM.render(<SamuraiApp/>, document.getElementById('root')
);
