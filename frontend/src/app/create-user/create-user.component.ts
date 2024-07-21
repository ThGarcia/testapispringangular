import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css', '../app.component.css']
})
export class CreateUserComponent {
  userData = {
    name: '',
    email: ''
  };
  error: string | null = null;

  constructor(private service: UserService, private router: Router) {}

  createUser() {
    this.service.createUser(this.userData).subscribe(
      response => {
        console.log('User created!', response);
        this.router.navigate(['/list']);
      },
      error => {
        this.error = error.message;
        console.error('Error creating post', error);
      }
    );
  }
}
