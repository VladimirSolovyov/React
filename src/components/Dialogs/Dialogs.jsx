import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;

    return (
        <div className={s.dialog + " " + s.dialogActive}>
            <NavLink to={path}> {props.name} </NavLink>
        </div>
    );
}

const Message = (props) => {
    return <div className={s.message}>{props.message}</div>
}


const Dialogs = () => {
    let dialogs = [
        {id:1,name:'Mother'},
        {id:2,name:'Father'},
        {id:3,name:'Wife'},
        {id:4,name:'Brother'},
        {id:5,name:'Sister'},
        {id:6,name:'Son'},
        ];

    let messages =[
        {id:1,message:'Hi, Son!'},
        {id:1,message:'How a you?'},
        {id:1,message:'Goodbye, son :)'},
    ];

    let dialogsElements = dialogs.map(d => <DialogItem id={d.id} name={d.name}/>);
    let messageElements = messages.map(m => <Message message ={m.message} />);

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