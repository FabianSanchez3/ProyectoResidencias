import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import ValidateForm from '../helpers/validationform';
import { AuthService } from '../services/auth.service';
import { UserStoreService } from '../services/user-store.service';
import { NgToastService } from 'ng-angular-popup';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;
  type: String = "password"
  isText: boolean = false;
  eyeIcon: string = 'fa-eye-slash';


  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private toast: NgToastService,
    private userStore: UserStoreService
  ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

  }

  hideShowPass() {
    this.isText = !this.isText;
    this.isText ? (this.eyeIcon = 'fa-eye') : (this.eyeIcon = 'fa-eye-slash');
    this.isText ? (this.type = 'text') : (this.type = 'password');
  }

  onSubmit() {
    if (this.loginForm.valid) {

      console.log(this.loginForm.value)

    } else {



      this.ValidateAllFormFileds(this.loginForm);
      alert("TU FORMULARIO ES INVALIDO")

    }
  }

     private ValidateAllFormFileds(formGroup:FormGroup){
      Object.keys(formGroup.controls).forEach(field => {
        const control = formGroup.get(field);
        if (control instanceof FormControl){
          control.markAsDirty({onlySelf:true});
        }else if(control instanceof FormGroup) {
          this.ValidateAllFormFileds(control)
       }

       })
    }

  }

