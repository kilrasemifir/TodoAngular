import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasicTodoItem, TodoItem } from 'src/app/models/todo-item';
import { TodoStoreService } from 'src/app/services/todo-store.service';

@Component({
  selector: 'app-todo-liste',
  templateUrl: './todo-liste.component.html',
  styleUrls: ['./todo-liste.component.css']
})
export class TodoListeComponent implements OnInit {

  public todoListe: TodoItem[] = [];
  public editItem?: TodoItem = undefined;
  public editItemIndex: number = -1;

  constructor(
    public todoStore: TodoStoreService,
    private router: Router) { }

  onAjouter(todoItem: TodoItem) {
    if (this.editItemIndex == -1)
      this.todoStore.add(todoItem);
    else {
      this.todoStore.setItem(this.editItemIndex, this.editItem || new BasicTodoItem());
      this.editItem = undefined;
      this.editItemIndex = -1;
    }
  }

  onDelete(item: TodoItem) {
    this.todoStore.remove(item)
    this.todoListe = this.todoStore.getAll();
  }

  onEdit(item: TodoItem, index: number) {
    this.router.navigate([`todo-form/${index}`])
  }

  ngOnInit(): void {
    this.todoListe = this.todoStore.getAll();
  }

}
