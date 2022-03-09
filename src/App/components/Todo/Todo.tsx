import React, { FC, useState } from 'react';
import s from './Todo.module.css';
import { ITodo } from './../../type/type';
import { useAppActions } from '../../hooks/useAppActions';
import { EditForm } from '../EditFrom/EditForm';

interface IProps {
    number: number
    todo: ITodo
}

export const Todo: FC<IProps> = ({ number, todo }) => {
    const [editMode, setEditMode] = useState(false);
    const { deleteTodo, toggleStatus, changeTitle } = useAppActions();

    const onChangeTitle = (title: string) => {
        changeTitle({id: todo.id, title});
        setEditMode(false);
    };

    return (
        <div className={`${s.todo} ${todo.completed ? s.completed: ''}`}>
            <div className={s.todo_container_text}>
                <p className={`${s.text} ${s.number}`}>{number + 1}.</p>
                {editMode 
                    ? <EditForm initText={todo.title} onChangeTitle={onChangeTitle}/>
                    : <p className={`${s.text} ${s.title}`}>{todo.title}</p>
                }
            </div>
            <div className={s.todo_container_buttons}>
                <button className={s.todo_button} onClick={() => setEditMode(prev => !prev)}>
                    {editMode ? 'close' : 'edit'}
                </button>
                <button className={s.todo_button} onClick={() => deleteTodo(todo.id)}>delete</button>
                <input type='checkbox' onChange={() => toggleStatus(todo.id)} className={s.todo_settings_completed}/>
            </div>
        </div>
    );
};