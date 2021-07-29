import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LogginService } from 'src/app/services/loggin.service';

@Component({
  selector: 'auth-loggin-form',
  templateUrl: './loggin-form.component.html',
  styleUrls: ['./loggin-form.component.css']
})
export class LogginFormComponent implements OnInit {

  logginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private logginService: LogginService
  ) { 
    this.logginForm = this.formBuilder.group({
      username: new FormControl(""),
      password: new FormControl("")
    })
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.logginService.findUserByUsernameAndPassword(this.logginForm.value).subscribe(users=>{
      console.log(users);
      if(users[0]){
        this.logginService.saveCurrentUser(users[0]);
        this.router.navigate([""])
      } else {
        alert("Mauvaise coordonnées")
      }
    })
  }

}