import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogginFormComponent } from './loggin-form/loggin-form.component';
import { LogginPageComponent } from './loggin-page/loggin-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes } from '@angular/router';

export const authRoutes: Routes= [
  { path: "loggin", component: LogginPageComponent },
]

@NgModule({
  declarations: [
    LogginFormComponent,
    LogginPageComponent,
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule
  ]
})
export class AuthModule { }
