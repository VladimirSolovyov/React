import React from 'react';
import s from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";
import CartIcon from '../../../img/dialogs/mother_ico.png';

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;
   // let pathIco = 'dialogs/' + props.ico;

    return (
        <div className={s.dialog + " " + s.dialogActive}>
            <img alt="content-img" src={CartIcon} className={s.icoImg}/>
            <NavLink to={path}> {props.name} </NavLink>
        </div>
    );
}


export default DialogItem;