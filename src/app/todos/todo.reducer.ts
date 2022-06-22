import { createReducer, on } from '@ngrx/store';
import { _createStoreReducers } from '@ngrx/store/src/store_module';
import { Todo } from './models/todo.models';
import { crear } from './todo.actions';

export const estadoInicial: Todo[] = [];

const _todoReducer = createReducer(
    estadoInicial,
  on(crear, (state, {texto}) => [...state, new Todo(texto)]),
);

export function todoReducer(state, action){
    return _todoReducer(state,action);
}