import { Component, OnInit } from '@angular/core';
import { TodoItem } from 'src/app/models/todo-item';
import { TodoStoreService } from 'src/app/services/todo-store.service';
import data from 'src/assets/todo.data.json';

@Component({
  selector: 'app-home',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomeComponent implements OnInit {

  todoListe: any = JSON.stringify(data);
  constructor(public todoStore: TodoStoreService) { }

  ngOnInit(): void {
  }

}
