import React, { FC } from 'react';
import { Todo } from './../Todo/Todo';
import s from './todoList.module.css';
import { useAppSelector } from './../../hooks/useAppSelector';

export const TodoList: FC = () => {

    const todos = useAppSelector(state => state.Todos.todos);
    return (
        <div className={s.todoList}>
            {todos.map((todo, i) => <Todo key={todo.id} number={i} todo={todo}/>)}
        </div>
    );
};
