import { UsersService } from './../shared/users.service';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userNames = [];
  userName: string = '';
  password: string = '';
  // loginFlag:boolean = true;

  myForm: FormGroup;
  constructor(private router: Router, public userService: UsersService) {
    this.myForm = new FormGroup({
      "userName": new FormControl(null, Validators.required),
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

  // formValidator(control: AbstractControl): { [key: string]: boolean } | null {
  //   if (control.value !== '') {
  //     console.log(control.value)
  //     return { 'formValidator': true }
  //   }
  //   return null;
  // };
  login() {
    let uu = this.userService.loginUser(this.userName, this.password)
    if(uu){
      this.router.navigate(['page']);
    }
    else{
      console.log('inccorect')
    }
    
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
