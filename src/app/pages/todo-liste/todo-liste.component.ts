import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasicTodoItem, TodoItem } from 'src/app/models/todo-item';
import { TodoHTTPService } from 'src/app/services/todo-http.service';
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
    private todoHttpService: TodoHTTPService,
    private router: Router
  ) { }

  onDelete(item: TodoItem) {
    this.todoHttpService.delete(item).subscribe(()=>{
      this.todoListe = this.todoListe.filter(val=>val.id != item.id);
    });
    // this.todoStore.remove(item)
    // this.todoListe = this.todoStore.getAll();
  }

  onEdit(item: TodoItem) {
    this.router.navigate([`todo-form/${item.id}`])
  }

  ngOnInit(): void {
    this.todoHttpService.findAll().subscribe(result => {
      this.todoListe = result;
    });
  }

}
