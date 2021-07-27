import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { BasicTodoItem, TodoItem } from './models/todo-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public todoListe: TodoItem[] = [new BasicTodoItem("PH", "DESCRIPTION")];

  onAjouter(todoItem: TodoItem){
    this.todoListe.push(todoItem);
  }
}
