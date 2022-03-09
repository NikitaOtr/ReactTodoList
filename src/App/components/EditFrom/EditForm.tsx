import React, { FC, useState } from 'react';
import s from './EditForm.module.css';

interface IProps {
    initText: string
    onChangeTitle: (title: string) => void
}

export const EditForm: FC<IProps> = ({ initText, onChangeTitle }) => {
    const [text, setText] = useState(initText);

    return (
        <div>
            <input className={s.input} value={text} autoFocus placeholder='Print your todo'
                onChange={e => setText(e.target.value)}
                onKeyPress={e => e.code === 'Enter' && onChangeTitle(text)} />
            <button className={s.button} onClick={() => onChangeTitle(text)}>change</button>
        </div>
    );
};