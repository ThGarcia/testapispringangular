import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css', '../app.component.css']
})
export class EditUserComponent implements OnInit {
  user: any = { name: '', email: '' };
  error: string | null = null;

  constructor(
    private service: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.service.getUsers().subscribe(
        users => {
          this.user = users.find((user: any) => user.id === id);
        },
        error => {
          this.error = error.message;
        }
      );
    });
  }

  handleSubmit(updatedUser: { name: string; email: string }) {
    this.service.createUser(updatedUser).subscribe(
      () => {
        console.log(`User updated!`);
        this.router.navigate(['/list']);
      },
      error => {
        this.error = error.message;
      }
    );
  }
}
