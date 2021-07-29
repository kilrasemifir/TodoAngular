import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoItem } from 'src/app/models/todo-item';
import { TodoHTTPService } from 'src/app/services/todo-http.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  public todoListe: TodoItem[] = [];

  constructor(
    private todoHttpService: TodoHTTPService, private router: Router
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
