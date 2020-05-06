import React from 'react';
import s from '../Friends.module.css';

const Friend = (props) => {
    return (
        <div className={s.friendItem}>
            <div className={s.icoImg}></div>
            {props.nameUser}
        </div>
    );
}

export default Friend;

