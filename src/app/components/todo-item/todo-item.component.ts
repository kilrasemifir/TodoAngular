import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BasicTodoItem, TodoItem, TodoTag } from 'src/app/models/todo-item';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todoItem: TodoItem = new BasicTodoItem();
  @Input() isOpen = true;
  @Output() onDelete = new EventEmitter<TodoItem>();
  @Output() onEdit = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  onDeleteCallback(){
    this.onDelete.emit();
  }

  onEditCallback(){
    this.onEdit.emit();
  }

  onCloseCallback(){
    this.isOpen = !this.isOpen;
    console.log(this.isOpen)
  }

  getTagStyle(tag: TodoTag){
    return {'background-color': tag.color}
  }

}
