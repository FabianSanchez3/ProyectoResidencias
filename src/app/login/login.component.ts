import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { UserService } from '../services/user.service';
import ValidateForm from '../../helpers/validationform';
import { NgToastService } from 'ng-angular-popup';
import { UserStoreService } from 'src/app/services/user-store.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
 public loginForm!:FormGroup;

 type: String= "password"
 isText: boolean = false;
 eyeIcon: string = 'fa-eye-slash';

 constructor(
  private formBuilder: FormBuilder,
  private userService:UserService
  ) { }

  ngOnInit(): void {

    this.loginForm = this.formBuilder.group({
      username: ['',Validators.required],
      password: ['',Validators.required]
    })

  }

  hideShowPass() {
    this.isText = !this.isText;
    this.isText ? (this.eyeIcon = 'fa-eye') : (this.eyeIcon = 'fa-eye-slash');
    this.isText ? (this.type = 'text') : (this.type = 'password');
  }

  onSubmit(){
    if(this.loginForm.valid){

      console.log(this.loginForm.value)
      //enviar la base de datos obj
    }else{
       console.log(" Form is not valid ");
      //arroja el error usando  campos obligatorios
    }
  }


}
