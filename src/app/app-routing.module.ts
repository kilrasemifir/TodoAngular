import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { NotEmptyTodoListGuard } from './guards/not-empty-todo-list.guard';
import { HomeComponent } from './pages/home-page/home-page.component';
import { LogginPageComponent } from './pages/loggin-page/loggin-page.component';
import { NotFound404Component } from './pages/not-found404/not-found404.component';
import { TodoFormulairePageComponent } from './pages/todo-formulaire-page/todo-formulaire-page.component';
import { TodoListePageComponent } from './pages/todo-liste-page/todo-liste-page.component';

const routes: Routes = [
  { path: "loggin", component: LogginPageComponent },
  { path: "todo-liste", component: TodoListePageComponent, canActivate:[NotEmptyTodoListGuard, AuthGuard] },
  { path: "todo-form/:index", component: TodoFormulairePageComponent, canActivate:[AuthGuard] },
  { path: "todo-form", component: TodoFormulairePageComponent, canActivate:[AuthGuard] },
  { path: "", component: HomeComponent, canActivate:[AuthGuard] },
  { path: "404", component: NotFound404Component },
  { path: "**", redirectTo: "404" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
