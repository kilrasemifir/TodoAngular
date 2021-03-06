import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/guards/auth.guard';
import { NotEmptyTodoListGuard } from './guards/not-empty-todo-list.guard';
import { HomeComponent } from './pages/home-page/home-page.component';
import { LogginPageComponent } from './auth/loggin-page/loggin-page.component';
import { NotFound404Component } from './pages/not-found404/not-found404.component';
import { TodoFormulairePageComponent } from './pages/todo-formulaire-page/todo-formulaire-page.component';
import { TodoListePageComponent } from './pages/todo-liste-page/todo-liste-page.component';
import { authRoutes } from './auth/auth.module';
import { AbComponent } from './pages/ab/ab.component';
import { AComponent } from './components/a/a.component';
import { BComponent } from './components/b/b.component';

const routes: Routes = [
  ...authRoutes,
  {
    path: "admin", component: AbComponent, children: [
      { path: "a", component: AComponent },
      { path: "b", component: BComponent,  },
    ]
  },
  { path: "todo-liste", component: TodoListePageComponent, canActivate: [NotEmptyTodoListGuard, AuthGuard] },
  { path: "todo-form/:index", component: TodoFormulairePageComponent, canActivate: [AuthGuard] },
  { path: "todo-form", component: TodoFormulairePageComponent, canActivate: [AuthGuard] },
  { path: "", component: HomeComponent, canActivate: [AuthGuard] },
  { path: "404", component: NotFound404Component },
  { path: "**", redirectTo: "404" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
