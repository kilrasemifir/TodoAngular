import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NotFound404Component } from './pages/not-found404/not-found404.component';
import { TodoFormulairePageComponent } from './pages/todo-formulaire-page/todo-formulaire-page.component';
import { TodoListeComponent } from './pages/todo-liste/todo-liste.component';

const routes: Routes = [
  {path:"todo-liste", component:TodoListeComponent},
  {path:"todo-form", component:TodoFormulairePageComponent},
  {path:"", component:HomeComponent},
  {path:"404", component:NotFound404Component},
  {path:"**", redirectTo:"404"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
