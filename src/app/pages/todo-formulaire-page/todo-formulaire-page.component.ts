import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoItem } from 'src/app/models/todo-item';
import { TodoStoreService } from 'src/app/services/todo-store.service';

@Component({
  selector: 'app-todo-formulaire-page',
  templateUrl: './todo-formulaire-page.component.html',
  styleUrls: ['./todo-formulaire-page.component.css']
})
export class TodoFormulairePageComponent implements OnInit {

  editTodo?: TodoItem;
  editIndex = -1;

  constructor(
    private todoStore: TodoStoreService, 
    private router: Router, 
    private activeRoute: ActivatedRoute) { }

  onFinish(item: TodoItem){
    if (this.editTodo){
      this.todoStore.setItem(this.editIndex, item);
    }
    else {
      this.todoStore.add(item);
    }
    this.router.navigate(["todo-liste"]);
  }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(params => {
      let indexString = params.index;
      if (indexString){
        this.editIndex = parseInt(indexString);
        this.editTodo = this.todoStore.getByIndex(this.editIndex);
      }
    })
  }

}
