import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user.interface';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get<User[]>(`https://jsonplaceholder.typicode.com/users`);
  }

  getUser(id: number) {
    return this.http.get<User>(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
  }
}
