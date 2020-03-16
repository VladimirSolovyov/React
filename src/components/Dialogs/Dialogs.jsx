import React from 'react';
import s from './Dialogs.module.css';

const Dialogs = () => {
    return (
            <div className={s.dialogs}>
                <div className={s.dialogsItem}>
                    <div className={s.dialog + " " + s.dialogActive}>Mother</div>
                    <div className={s.dialog}>Father</div>
                    <div className={s.dialog}>Wife</div>
                    <div className={s.dialog}>Brother</div>
                    <div className={s.dialog}>Sister</div>
                    <div className={s.dialog}>Son</div>
                </div>
            <div className={s.messages}>
                <div className={s.message}>Hi, Son!</div>
                <div className={s.message}>How a you?</div>
                <div className={s.message}>Goodbye, son :)</div>
            </div>
            </div>
    );
}

export default Dialogs;