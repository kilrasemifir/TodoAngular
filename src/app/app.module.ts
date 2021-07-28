import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { TodoFormulaireComponent } from './components/todo-formulaire/todo-formulaire.component';
import { HomeComponent } from './pages/home/home.component';
import { TodoListeComponent } from './pages/todo-liste/todo-liste.component';
import { NotFound404Component } from './pages/not-found404/not-found404.component';
import { HeaderComponent } from './components/header/header.component';
import { TodoFormulairePageComponent } from './pages/todo-formulaire-page/todo-formulaire-page.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoItemComponent,
    TodoFormulaireComponent,
    HomeComponent,
    TodoListeComponent,
    NotFound404Component,
    HeaderComponent,
    TodoFormulairePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
