import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
      titre: new FormControl("", Validators.compose([
        Validators.required, 
        Validators.minLength(10), 
        Validators.maxLength(30)])),
      description: new FormControl("", Validators.required),
      date: new FormControl(Date.now())
    });
  }

  ngOnChanges(){
    if (this.defaultValue){
      this.todoForm.setValue(this.defaultValue);
    }
  }

  onSubmit(){
    if (this.todoForm.valid){
      this.onFinish.emit(this.todoForm.value);
      this.todoForm.reset();
    } else {
      if (this.todoForm.get("titre")?.errors)
        alert(JSON.stringify(this.todoForm.get("titre")?.errors))
      else if (this.todoForm.get("description")?.errors)
        alert(JSON.stringify(this.todoForm.get("description")?.errors))
    }
  }

}
