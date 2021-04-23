const SEND_MESSAGE = 'SEND-MESSAGE';

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
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessageBody = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id:6, message: newMessageBody}]
            }
        default:
            return state
    }
}

export const sendMessageActionCreator = (newMessageBody) => (
    {
        type: SEND_MESSAGE,
        newMessageBody
    }
)

export default dialogsReducer