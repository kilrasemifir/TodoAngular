import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoItem } from 'src/app/models/todo-item';
import { TodoStoreService } from 'src/app/services/todo-store.service';

@Component({
  selector: 'app-todo-formulaire-page',
  templateUrl: './todo-formulaire-page.component.html',
  styleUrls: ['./todo-formulaire-page.component.css']
})
export class TodoFormulairePageComponent implements OnInit {

  constructor(private todoStore: TodoStoreService, private router: Router) { }

  onFinish(item: TodoItem){
    this.todoStore.add(item);
    this.router.navigate(["todo-liste"]);
  }

  ngOnInit(): void {
  }

}
