import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css', '../app.component.css']
})
export class ListUserComponent implements OnInit {
  users: any[] = [];
  error: string | null = null;

  constructor(private service: UserService, private router: Router) {}

  ngOnInit(): void {
    this.service.getUsers().subscribe(
      users => {
        this.users = users;
        if (users.length < 1) {
          this.router.navigate(['/create']);
        }
      },
      error => {
        this.error = error.message;
      }
    );
  }

  handleDelete(id: number) {
    this.service.deleteUser(id).subscribe(
      () => {
        this.users = this.users.filter(user => user.id !== id);
        console.log(`User ${id} deleted!`);
      },
      error => {
        this.error = error.message;
      }
    );
  }

  handleEdit(id: number) {
    this.router.navigate([`/${id}`]);
  }
}
