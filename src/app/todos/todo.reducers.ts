import { createReducer, on } from '@ngrx/store';
import { todo } from './models/todo.model';
import { createTodo, toggleTodo, editarTodo, borrarTodo, toggleAll, limparTodo } from './todo.actions';


export const initialState: todo[] = [
  new todo('Salvar to mundo'),
  new todo('vencer a thanos'),
  new todo('comprar escudo do capitao america'),
  new todo('roubar martelo do thor'),
]; //tipos de dados -model

const _todoReducer = createReducer(initialState,
  on(createTodo, (state, { texto }) => [...state, new todo( texto)] ), //recebo o props{argumento actions},crio novo array com states separados e cio nova instacia de todo dentro dele,imutabilidade

  on(limparTodo, (state) => state.filter( todo => !todo.completado) ),

  on(borrarTodo, ( state,{ id }) => state.filter( todo => todo.id !== id)),

  on(toggleAll , ( state,{ completado }) => state.map( todo => {
    return {
      ...todo,
      completado: completado
    }
  }) ),

  on(toggleTodo, (state, { id }) => {
  return state.map( todo => {  //se o id do meu array iterado for igual ao que recebi,troca.
     if( todo.id === id ){
        return {
            ...todo,
            completado: !todo.completado
      }
} else {
  return todo;
}
    });
  }),

  on(editarTodo, (state, { id, texto }) => {
  return state.map( todo => {  //se o id do meu array iterado for igual ao que recebi,troca.
     if( todo.id === id ){
        return {
            ...todo,
            texto: texto
      }
} else {
  return todo;
}
    });
  }),
);

  export function todoReducer(state, action) {
    return _todoReducer(state, action);
  }
