import React from 'react';
import s from './../Dialogs.module.css';

const Message = (props) => {
    let alingMsg = (props.who)? s.youText : s.friendText;
    return (
        <div className={s.message + ' ' +  alingMsg}>{props.message}</div>
    );
}

export default Message;