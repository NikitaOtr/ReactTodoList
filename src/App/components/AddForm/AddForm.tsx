import React, { FC } from 'react';
import s from './AddForm.module.css';
import { useAppActions } from '../../hooks/useAppActions';
import { useInput } from './../../hooks/useInput';

export const AddForm: FC = () => {
    const { addTodo } = useAppActions();
    const [v, bind, reset] = useInput('');

    const submitForm = () => {
        if (v) {
            addTodo(v);
            reset();
        }
    };

    return (
        <div>
            <input className={s.input} {...bind} placeholder='Print your todo'
                onKeyPress={e => e.code === 'Enter' && submitForm()}/>
            <button className={s.button} onClick={submitForm}>Add</button>
        </div>
    );
};