import s from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";


const Message = (props) => {
    return (
        <div>{props.message}</div>
    )
}


export default Message