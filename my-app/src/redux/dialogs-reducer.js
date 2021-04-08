const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

let initialState = {
    dialogs: [
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Kate'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Valera'},
    ],

    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Hui'},
        {id: 3, message: 'YUO'},
        {id: 4, message: 'VDSS'},
        {id: 5, message: 'BDSM'},
        {id: 6, message: 'VMVMV'},
    ],
    newMessageBody: '',
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body,
            };
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messages: [...state, {id:6, message: body}]
            }
        default:
            return state
    }
}

export const sendMessageActionCreator = () => (
    {
        type: SEND_MESSAGE
    }
)
export const updateNewMessageTextActionCreator = (body) =>
    ({
        type: UPDATE_NEW_MESSAGE_BODY,
        body: body
    })

export default dialogsReducer