import React, { useEffect } from 'react';
import s from './App.module.css';
import { AddForm } from './components/AddForm/AddForm';
import { TodoList } from './components/TodoList/TodoList';
import { Header } from './components/Header/Header';
import { useAppActions } from './hooks/useAppActions';

export const App = () => {

    const {init} = useAppActions();
    useEffect(() => {
        init();
    }, []);
    
    return (
        <div className={s.main}>
            <div className={s.container}>
                <Header/>
                <AddForm/>
                <TodoList/>
            </div>
        </div>
    );
};