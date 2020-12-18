import { Pipe, PipeTransform } from '@angular/core';
import { filtrosValidos } from '../filtro/filtro.actions';
import { todo } from './models/todo.model';

@Pipe({
  name: 'filtroTodo'
})
export class FiltroPipe implements PipeTransform {

  transform( todos: todo[], filtro: filtrosValidos): todo[] {

    switch( filtro ) {

      case 'completados':
        return todos.filter( todo => todo.completado);

        case 'pendentes':
        return todos.filter( todo => !todo.completado);

        default:
          return todos;
    }
  }

}
