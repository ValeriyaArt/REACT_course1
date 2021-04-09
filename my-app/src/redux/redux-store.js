import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import {combineReducers} from "redux";
import usersReducer from "./users-reducer";

const {createStore} = require("redux");

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
})

let store = createStore(reducers);

export default store