import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { TodoItem } from 'src/app/models/todo-item';

@Component({
  selector: 'app-todo-formulaire',
  templateUrl: './todo-formulaire.component.html',
  styleUrls: ['./todo-formulaire.component.css']
})
export class TodoFormulaireComponent implements OnChanges{

  @Input() defaultValue?: TodoItem;
  /**
   * Evenement appelé a la fin du formulaire.
   * La valeur est un @see TodoItem
   */
  @Output() onFinish = new EventEmitter<TodoItem>()

  public todoForm: FormGroup;

  constructor(private formBuilder: FormBuilder){
    this.todoForm = formBuilder.group({
      titre: new FormControl(""),
      description: new FormControl(""),
      date: new FormControl(Date.now())
    });
  }

  ngOnChanges(){
    if (this.defaultValue){
      this.todoForm.setValue(this.defaultValue);
    }
  }

  onSubmit(){
    this.onFinish.emit(this.todoForm.value);
    this.todoForm.reset();
  }

}
