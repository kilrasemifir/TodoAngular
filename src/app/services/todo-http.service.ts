import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { TodoItem } from '../models/todo-item';

@Injectable({
  providedIn: 'root'
})
export class TodoHTTPService {

  private readonly BASE_URL = `${environment.apiUrl}todos/`

  constructor(private httpClient: HttpClient) { }

  public findAll(){
    return this.httpClient.get<TodoItem[]>(this.BASE_URL)
  }

  public delete(item: TodoItem){
    let url = this.BASE_URL+item.id
    return this.httpClient.delete(url)
  }

  public update(item: TodoItem){
    let url = this.BASE_URL+item.id;
    return this.httpClient.put(url, item);
  }

  public findById(id:string){
    let url = this.BASE_URL+id
    return this.httpClient.get<TodoItem>(url)
  }

  public save(item: TodoItem){
    let url = this.BASE_URL;
    return this.httpClient.post(url, item);
  }
}
