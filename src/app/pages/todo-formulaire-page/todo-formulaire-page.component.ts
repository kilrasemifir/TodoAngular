import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoItem } from 'src/app/models/todo-item';
import { TodoHTTPService } from 'src/app/services/todo-http.service';
import { TodoStoreService } from 'src/app/services/todo-store.service';

@Component({
  selector: 'app-todo-formulaire-page',
  templateUrl: './todo-formulaire-page.component.html',
  styleUrls: ['./todo-formulaire-page.component.css']
})
export class TodoFormulairePageComponent implements OnInit {

  editTodo?: TodoItem;

  constructor(
    private todoHttpService: TodoHTTPService,
    private router: Router, 
    private activeRoute: ActivatedRoute) { }

  onFinish(nouveauTodo: TodoItem){
    if (this.editTodo){
      nouveauTodo.id = this.editTodo.id
      this.todoHttpService.update(nouveauTodo).subscribe(()=>{
        this.router.navigate(["todo-liste"]);
      })
    }
    else
      this.todoHttpService.save(nouveauTodo).subscribe(()=>{
        this.router.navigate(["todo-liste"]);
      })
  }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(params => {
      let indexString = params.index;
      if (indexString){
        this.todoHttpService.findById(indexString).subscribe(item=>{
          this.editTodo = item;
          console.log(item)
        });
      }
    })
  }

}
