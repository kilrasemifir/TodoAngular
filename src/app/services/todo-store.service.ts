import { Injectable } from '@angular/core';
import { TodoItem } from '../models/todo-item';

@Injectable({
  providedIn: 'root'
})
export class TodoStoreService {

  private todoListe: TodoItem[] = [];

  constructor() { }

  public add(item: TodoItem){
    this.todoListe.push(item)
    this.saveInLocalStorage()
  }

  public getAll(){
    this.getFromLocalStorage()
    return this.todoListe;
  }

  public getByIndex(index: number){
    this.getFromLocalStorage()
    return this.todoListe[index];
  }

  public remove(item: TodoItem){
    this.todoListe = this.todoListe.filter(val=>val!=item);
    this.saveInLocalStorage()
  }

  public setItem(index:number, item:TodoItem){
    this.todoListe[index] = item;
    this.saveInLocalStorage()
  }

  private saveInLocalStorage(){
    localStorage.setItem("todoliste", JSON.stringify(this.todoListe));
  }

  private getFromLocalStorage(){
    const jsonTodos = localStorage.getItem("todoliste");
    if (jsonTodos) this.todoListe = JSON.parse(jsonTodos);
    else this.todoListe = [];
  }

}
