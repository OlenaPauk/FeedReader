import { IUser } from './post';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  public users: IUser[] = [
    {
      id: 1,
      userName: 'Bret',
      password: '1111',
      image: '../../assets/img/img-1.png'
    },
    {
      id: 2,
      userName: 'Samantha',
      password: '1111',
      image: '../../assets/img/img-2.png'
    },
    {
      id: 3,
      userName: 'Kamren',
      password: '1111',
      image: '../../assets/img/img-3.png'
    },
  ];
  constructor() { }
  loginUser(userName: string, password: string): IUser | undefined {
    return this.users.find(user => (user.userName === userName && user.password === password));
  }
}
