import { todo } from './todos/models/todo.model';
import { ActionReducerMap } from '@ngrx/store';
import { todoReducer } from './todos/todo.reducers';
import { filtrosValidos} from './filtro/filtro.actions'
import { filtroReducer} from './filtro/filtro.reducer'
export interface AppState {

  todos: todo[],
  filtro: filtrosValidos;
}

export const appReducers: ActionReducerMap<AppState> = {
//como esta no app.module
  todos: todoReducer,
  filtro: filtroReducer
}
