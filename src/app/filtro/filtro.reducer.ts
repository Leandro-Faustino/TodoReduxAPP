import { createReducer, on } from '@ngrx/store';
import  {setFiltro, filtrosValidos} from './filtro.actions';


export const initialState: filtrosValidos = 'todos';

const _filtroReducer = createReducer(initialState,
  on(setFiltro, (state, { filtro }) => filtro = filtro ), //recebo o props{argumento actions},crio novo array com states separados e cio nova instacia de todo dentro dele,imutabilidade

);

  export function filtroReducer(state, action) {
    return _filtroReducer(state, action);
  }
