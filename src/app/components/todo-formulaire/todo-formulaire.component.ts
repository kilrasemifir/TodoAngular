import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-todo-formulaire',
  templateUrl: './todo-formulaire.component.html',
  styleUrls: ['./todo-formulaire.component.css']
})
export class TodoFormulaireComponent{

  @Output() ajouter = new EventEmitter()

  public todoForm: FormGroup;

  constructor(private formBuilder: FormBuilder){
    this.todoForm = formBuilder.group({
      titre: new FormControl(""),
      description: new FormControl(""),
      date: new FormControl(Date.now())
    });
  }

  onSubmit(){
    this.ajouter.emit(this.todoForm.value);
    this.todoForm.reset();
  }

}
