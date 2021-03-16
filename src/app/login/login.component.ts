import { UsersService } from './../shared/users.service';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userNames = [];
  userName: string = '';
  // loginFlag:boolean = true;

  myForm: FormGroup;
  constructor(private router: Router, public userService: UsersService) {
    this.myForm = new FormGroup({
      "userName": new FormControl("Bret", Validators.required,this.formValidator),
      "password": new FormControl("1111", Validators.pattern(/1111/))
    });

  }

  ngOnInit(): void {

  }
  // formValidator():AsyncValidatorFn[] | any {
  //   let loginName = this.userService.users.find(user =>
  //     user.userName === this.userName)
  //     console.log('11',loginName)
  //     if(loginName){
  //       console.log('22',loginName)
  //     }
  // }
 
  formValidator (control: AbstractControl):{[key: string]: boolean} | null |any {
let loginName = this.userService.users.find(user=>user.userName===control.value)
    if( loginName !==null ){
      return {'userName': true}
    }
    return null;
  };
  login() {
    this.router.navigate(['page']);
  }
  // login(value:any) {
  //   let loginName = this.userService.users.find(user => user.userName === value)
  //   console.log(value)
  //   if (loginName){
  //     this.loginFlag = false
  //     this.router.navigate(['page']);
  //   }

  // }

}
