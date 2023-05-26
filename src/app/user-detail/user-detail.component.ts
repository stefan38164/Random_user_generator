import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
})
export class UserDetailComponent implements OnInit {
  user!: User;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
    const selectedUser = localStorage.getItem('selectedUser');
    if (selectedUser) {
      this.user = JSON.parse(selectedUser);
    }
  }

  goBack() {
    this.router.navigate(['/users']);
  }
}
