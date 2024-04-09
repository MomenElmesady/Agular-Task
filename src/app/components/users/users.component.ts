import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users = []
  constructor(private apiService: ApiService) {} // Inject ApiService

  ngOnInit(): void {
    this.getUsersFromServer();
  }

  getUsersFromServer(): void {
    this.apiService.getUsers().subscribe((data: any) => {
      console.log(data.results[0]);
      this.users = data.results[0];
      // console.log(this.users)
    });
  }
}
