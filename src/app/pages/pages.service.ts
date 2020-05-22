import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { User } from '@models/user';
import { delay } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class PagesService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }

  fake(): Observable<any> {
    return of([]).pipe(delay(1000));
  }
}
