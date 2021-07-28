import { Component, OnInit } from '@angular/core';
import { TodoStoreService } from 'src/app/services/todo-store.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public todoStore: TodoStoreService) { }

  ngOnInit(): void {
  }

}
