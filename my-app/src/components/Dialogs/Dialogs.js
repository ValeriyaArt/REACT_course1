import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom"

const Dialogs = (props) => {
    let state = props.messagesPage;

    let dialogElements = state.dialogs.map(dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id}/>)
    let messagesElements = state.messages.map(m => <Message message={m.messages} key={m.id}/>)
    let newMessageBody = state.newMessageBody;

    let onNewMessageClick = () => {
        props.sendMessage();
    }

    let onNewMessageChange = (e) => {
        console.log(e)
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }

    let messageElements = state.messages.map( m => <Message message={m.message}/>);

    if (props.isAuth === false) return <Redirect to={"/login"}/>;
    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogElements }
                </div>
                <div className={s.messages}>
                    <div>{messageElements}</div>
                    <div>
                        <div><textarea value={newMessageBody}
                                       onChange={onNewMessageChange}
                                       placeholder='Enter your message'></textarea></div>
                        <div><button onClick={onNewMessageClick}>Send</button></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs