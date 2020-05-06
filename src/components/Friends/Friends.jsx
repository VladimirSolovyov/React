import React from 'react';
import s from './Friends.module.css';
import Friend from "./Friend/Friend";

const Friends = (props) => {
    let friendElements = props.state.map(m => <Friend nameUser={m.name} />);

    return (
        <div className={s.friends}>
            <div className={s.title}>Friends</div>
            <div className={s.block}>
            {friendElements}
            </div>
        </div>
    );
}


export default Friends;