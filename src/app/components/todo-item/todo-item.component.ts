import { Component, Input, OnInit } from '@angular/core';
import { BasicTodoItem, TodoItem } from 'src/app/models/todo-item';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todoItem: TodoItem = new BasicTodoItem();

  constructor() { }

  ngOnInit(): void {
  }

}
