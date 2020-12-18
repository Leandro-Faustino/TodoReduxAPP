import { Component, Input, OnInit, ViewChild, ElementRef,  } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { todo } from '../models/todo.model';
import *  as actions from  '../todo.actions';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/appState.reducer';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
@Input() todo: todo;
@ViewChild('inputFisico') txtInputFisico: ElementRef; //referencia ao variavel de ambiente

chkCompletado: FormControl;
txtInput: FormControl;

editando: boolean = false;

  constructor( private store: Store<AppState>) { }

  ngOnInit(): void {



  this.chkCompletado = new FormControl( this.todo.completado);
  this.txtInput = new FormControl( this.todo.texto,Validators.required);

this.chkCompletado.valueChanges.subscribe( value => {
  this.store.dispatch( actions.toggleTodo({ id: this.todo.id }));

})
  }
editar() {
this.editando = true;
this.txtInput.setValue( this.todo.texto );

setTimeout(() => {
  this.txtInputFisico.nativeElement.select();
},1);
}

terminarEdition() {
this.editando = false;

if( this.txtInput.invalid) {  return; }
if( this.txtInput.value === this.todo.texto) {  return; }

this.store.dispatch(actions.editarTodo({
  id: this.todo.id,
  texto: this.txtInput.value
})

)
}
borrar(){
  this.store.dispatch( actions.borrarTodo({ id: this.todo.id}));
}
}
