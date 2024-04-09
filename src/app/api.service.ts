import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HandleErrorService } from '../../../my-app6/src/app/handle-error.service';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient,private handleErrorService: HandleErrorService) { }
  getUsers() {
    return this.http.get('https://randomuser.me/api/');
  }
  getTasks() {
    return this.http.get('https://jsonplaceholder.typicode.com/todos');
  }
}
