import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 } from 'uuid';
import { ITodo } from '../../type/type';

const key = 'todos';

const initialState = {
    todos: [] as ITodo[]
};

export const todoReducer = createSlice({
    name: 'Todos',
    initialState,
    reducers: {
        init(state) {
            const jsonValue = localStorage.getItem(key);
            state.todos = jsonValue === null ? [] : JSON.parse(jsonValue);
        },
        addTodo(state, { payload : title }: PayloadAction<string>) {
            const newTodo: ITodo = {
                id: v4(),
                title,
                completed: false,
            };
            localStorage.setItem(key, JSON.stringify([...state.todos, newTodo]));
            state.todos.push(newTodo);
        },
        deleteTodo(state, { payload: id }: PayloadAction<string>) {
            const newTodos = state.todos.filter(todo => todo.id !== id);
            localStorage.setItem(key, JSON.stringify(newTodos));
            state.todos= newTodos;
        },
        toggleStatus(state, { payload: id }: PayloadAction<string>) {
            const newTodos = state.todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo);
            localStorage.setItem(key, JSON.stringify(newTodos));
            state.todos = newTodos;
        },
        changeTitle(state, { payload: { id, title } }: PayloadAction<{id: string, title: string}>) {
            const newTodos = state.todos.map(todo => todo.id === id ? { ...todo, title } : todo);
            localStorage.setItem(key, JSON.stringify(newTodos));
            state.todos = newTodos;
        },
    },
});

export const todoAction = todoReducer.actions;