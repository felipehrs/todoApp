import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const apiUrl = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  async getTaskList() {
    return await this.http.get(apiUrl + '/tasks/').toPromise();
  }

  async addTask(title: String, description: String) {
    const body = JSON.stringify({title: title, description: description});
    return await this.http.post('apiUrl + /tasks/', body, httpOptions).toPromise();
  }

  async updateTask($key: Number, title: String, description: String) {
    const body = JSON.stringify({title: title, description: description});
    return await this.http.put('apiUrl + /tasks/' + $key, body, httpOptions).toPromise;
  }

  async checkOrUncheckTask($key: Number, flag: boolean) {
    if (flag) {
      return await this.http.post('apiUrl + /task/' + $key + '/check', null, httpOptions).toPromise();
    } else {
      return await this.http.post('apiUrl + /task/' + $key + '/uncheck', null, httpOptions).toPromise();
    }
  }

  async removeTask($key: Number) {
   return await this.http.delete('apiUrl + /tasks/' + $key).toPromise();
  }
}
