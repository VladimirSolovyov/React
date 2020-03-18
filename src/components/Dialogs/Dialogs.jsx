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
    let dialogData = [
        {id:1,name:'Mother'},
        {id:2,name:'Father'},
        {id:3,name:'Wife'},
        {id:4,name:'Brother'},
        {id:5,name:'Sister'},
        {id:6,name:'Son'},
        ];

    let messageData =[
        {id:1,message:'Hi, Son!'},
        {id:1,message:'How a you?'},
        {id:1,message:'Goodbye, son :)'},
    ]


    return (
            <div className={s.dialogs}>
                <div className={s.dialogsItem}>
                    <DialogItem id={dialogData[0].id} name={dialogData[0].name} />
                    <DialogItem id={dialogData[1].id} name={dialogData[1].name} />
                    <DialogItem id={dialogData[2].id} name={dialogData[2].name} />
                    <DialogItem id={dialogData[3].id} name={dialogData[3].name} />
                </div>
                <div className={s.messages}>
                    <Message message ={messageData[0].message} />
                    <Message message ={messageData[1].message} />
                    <Message message ={messageData[2].message} />
                </div>
            </div>
    );
}

export default Dialogs;