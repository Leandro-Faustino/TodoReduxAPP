import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/appState.reducer';
import * as actions from 'src/app/filtro/filtro.actions';
import { limparTodo } from '../todo.actions';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

 filtroActual : actions.filtrosValidos ='todos';
 filtros: actions.filtrosValidos[] = ['todos','completados','pendentes'];

 pendentes: number = 0;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
// this.store.select('filtro').subscribe( filtro => this.filtroActual = filtro);
this.store.subscribe( state => {


  this.filtroActual =state.filtro;
  this.pendentes = state.todos.filter( todo => !todo.completado).length; //quantos elementos esta pendentes(falso)
})
  }

  cambiarFiltro( filtro: actions.filtrosValidos) {
this.store.dispatch( actions.setFiltro({ filtro:filtro }))
  }

  limparCompletados() {
this.store.dispatch( limparTodo())
  }

}
