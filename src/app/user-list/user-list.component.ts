import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User, Response } from '../data';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  users!: User[];

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
    this.userService.getRandomUsers(50, 'female').pipe(
      map((response: Response) => response.results)
    ).subscribe((users: User[]) => {
      this.users = users;
    });
  }
  

  viewUserDetail(user: User) {
    localStorage.setItem('selectedUser', JSON.stringify(user));
    this.router.navigate(['/users', user.email]);
  }
}
