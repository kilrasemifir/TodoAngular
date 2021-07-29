import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { TodoFormulaireComponent } from './components/todo-formulaire/todo-formulaire.component';
import { HomeComponent } from './pages/home-page/home-page.component';
import { TodoListePageComponent } from './pages/todo-liste-page/todo-liste-page.component';
import { NotFound404Component } from './pages/not-found404/not-found404.component';
import { HeaderComponent } from './components/header/header.component';
import { TodoFormulairePageComponent } from './pages/todo-formulaire-page/todo-formulaire-page.component';
import { TodoListComponent } from './layout/todo-list/todo-list.component';
import { HeaderButtonComponent } from './ui-component/header-button/header-button.component';
import { TodoHTTPService } from './services/todo-http.service';
import { LogginFormComponent } from './components/loggin-form/loggin-form.component';
import { LogginPageComponent } from './pages/loggin-page/loggin-page.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoItemComponent,
    TodoFormulaireComponent,
    HomeComponent,
    TodoListePageComponent,
    NotFound404Component,
    HeaderComponent,
    TodoFormulairePageComponent,
    TodoListComponent,
    HeaderButtonComponent,
    LogginFormComponent,
    LogginPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    InputTextModule,
    ButtonModule
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
