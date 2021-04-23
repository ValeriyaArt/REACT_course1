import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";

const Dialogs = (props) => {
    let state = props.messagesPage;

    let dialogElements = state.dialogs.map(dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id}/>)
    let messagesElements = state.messages.map(m => <Message message={m.messages} key={m.id}/>)
    let newMessageBody = state.newMessageBody;

    let addNewMessage = (values) =>{
        alert(values.newMessageBody)
        props.sendMessage(values.newMessageBody)
    }

    let messageElements = state.messages.map(m => <Message message={m.message}/>);

    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogElements}
                </div>
                <div className={s.messages}>
                    <div>{messageElements}</div>
                </div>
                <div>
                    <AddMessageFormRedux onSubmit={addNewMessage}/>
                </div>
            </div>
        </div>
    )
}


const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <div>
                    <Field name={"newMessageBody"}
                           component={"textarea"}
                           placeholder='Enter your message'/></div>
                <div>
                    <button>Send</button>
                </div>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)

export default Dialogs