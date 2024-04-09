import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  tasks = []
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.getTasksFromServer();
  }

  getTasksFromServer(): void {
    this.apiService.getTasks().subscribe((data: any) => {
      console.log(data[0]);
      this.tasks = data.slice(0,10);
      // console.log(this.users)
    });
  }
}
