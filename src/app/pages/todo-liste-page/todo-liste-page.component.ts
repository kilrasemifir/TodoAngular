import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasicTodoItem, TodoItem } from 'src/app/models/todo-item';
import { TodoHTTPService } from 'src/app/services/todo-http.service';
import { TodoStoreService } from 'src/app/services/todo-store.service';

@Component({
  selector: 'app-todo-liste-page',
  templateUrl: './todo-liste-page.component.html',
  styleUrls: ['./todo-liste-page.component.css']
})
export class TodoListePageComponent {

}
