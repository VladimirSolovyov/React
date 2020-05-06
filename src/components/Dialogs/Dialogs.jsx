import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    let dialogsElements = props.state.dialogs.map(d => <DialogItem id={d.id} name={d.name} ico={d.ico_img}/>);
    let messageElements = props.state.messages.map(m => <Message message ={m.message} who={m.msgYou}/>);

    return (
            <div className={s.dialogs}>
                <div className={s.dialogsItem}>
                    { dialogsElements }
                </div>
                <div className={s.messages}>
                    { messageElements }
                </div>
            </div>
    );
}

export default Dialogs;