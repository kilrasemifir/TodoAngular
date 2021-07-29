import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TodoHTTPService } from '../services/todo-http.service';

@Injectable({
  providedIn: 'root'
})
export class NotEmptyTodoListGuard implements CanActivate {

  constructor(
    private todoService: TodoHTTPService,
    private router: Router
  ){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.todoService.findAll().toPromise().then(results=>{
      if (results.length) return true;
      else {
        this.router.navigate(["todo-form"])
        return false;
      }
    })
  }
  
}
