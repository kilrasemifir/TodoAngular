import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class LogginService {

  private readonly BASE_URL = `${environment.apiUrl}users`

  constructor(private httpClient: HttpClient) { }

  public findUserByUsernameAndPassword(loggin:User): Observable<User[]>{
    const url = `${this.BASE_URL}?username=${loggin.username}&password=${loggin.password}`;
    return this.httpClient.get<User[]>(url);
  }

  public saveCurrentUser(user:User){
    localStorage.setItem("currentUser", JSON.stringify(user));
  }

  public isAuth(){
    return localStorage.getItem("currentUser");
  }
}
