import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { BasicTodoItem, TodoItem } from './models/todo-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public todoListe: TodoItem[] = [new BasicTodoItem("Mon premier Todo", "Ceci est un exemple d'un todo. Vous pouvez appuyer sur le bouton rouge pour le supprimer ou sur le bouton vert pour effectuer une edition.")];
  public editItem?: TodoItem = undefined;
  public editItemIndex: number = -1;

  onAjouter(todoItem: TodoItem){
    if (this.editItemIndex==-1)
      this.todoListe.push(todoItem);
    else {
      this.todoListe[this.editItemIndex] = todoItem;
      this.editItem = undefined;
      this.editItemIndex = -1;
    }
  }

  onDelete(item: TodoItem){
    this.todoListe = this.todoListe.filter(val=>val!=item);
  }

  onEdit(item: TodoItem, index:number){
    this.editItem = item;
    this.editItemIndex = index;
  }

}
