// src/app/user-list/user-list.component.ts

import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user.model';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html'
})
export class UserListComponent implements OnInit {
   users: any[] = [];
  
  
  //users: User[] = [];
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(
      data => {
        this.users = data;
      },
      error => {
        console.log(error);
      }
    );
  }
}
