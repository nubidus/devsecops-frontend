import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user.model';


@Component({
  selector: 'app-user',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserComponent implements OnInit {
  users: User[] = [];
  newUser: User = {} as User;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers().subscribe(
      users => this.users = users,
      error => console.log(error)
    );
  }

  addUser() {
    this.userService.createUser(this.newUser).subscribe(
      response => {
        console.log(response);
        this.getUsers();
        this.newUser = {} as User;
      },
      error => console.log(error)
    );
  }

  deleteUser(id: number | undefined) {
   if (id) {
     this.userService.deleteUser(id).subscribe(
       response => {
         console.log(response);
         this.getUsers();
       },
       error => console.log(error)
     );
   }
 }
} 
