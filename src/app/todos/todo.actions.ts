import { createAction, props } from '@ngrx/store';

//criar todo
export const createTodo = createAction(
  '[TODO] Create todo',
  props<{ texto: string }>()
  );

export const limparTodo = createAction('[TODO] Limpar todos');

// toggle
export const toggleTodo = createAction(
  '[TODO] Toggle todo',
  props<{ id: number }>()
  );

  export const editarTodo = createAction(
  '[TODO] Editar todo',
  props<{ id: number, texto: string }>()
  );

  export const borrarTodo = createAction(
    '[TODO] Borrar todo',
    props<{ id: number }>()
    );
export const toggleAll = createAction(
    '[TODO] ToggleAll todo',
    props<{ completado: boolean }>()
    );

