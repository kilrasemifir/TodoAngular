import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BasicTodoItem, TodoItem } from 'src/app/models/todo-item';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todoItem: TodoItem = new BasicTodoItem();
  @Output() onDelete = new EventEmitter<TodoItem>();

  constructor() { }

  ngOnInit(): void {
  }

  onDeleteCallback(){
    this.onDelete.emit();
  }

}
