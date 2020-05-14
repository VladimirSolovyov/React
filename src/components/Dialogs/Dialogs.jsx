import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    let dialogsElements = props.state.dialogs.map(d => <DialogItem id={d.id} name={d.name} ico={d.ico_img}/>);
    let messageElements = props.state.messages.map(m => <Message message ={m.message} who={m.msgYou}/>);
debugger;
    /*Add message logic*/
    let newMessageElement = React.createRef();
    let addMessage = () => {
        props.addMessage();
    }

    let editMessage = () => {
        let text = newMessageElement.current.value;
        props.editMessage(text);
    }

    return (
            <div className={s.dialogs}>
                <div className={s.dialogsItem}>
                    { dialogsElements }
                </div>
                <div className={s.messages}>
                    { messageElements }

                    {/*Add message*/}
                    <div className={s.newMsg}>
                        <input type="text" ref={newMessageElement} value={props.state.newMessageText} onChange={editMessage} />
                        <button onClick={addMessage}>Add message</button>
                    </div>

                </div>
            </div>
    );
}

export default Dialogs;