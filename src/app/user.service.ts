import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { API } from './data';
import { Response, User } from './data';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = API.API_URL;
  constructor(private http: HttpClient) {}

  getRandomUsers(results: number, gender?: string): Observable<User[]> {
    let url = `${this.apiUrl}?results=${results}${gender ? `&gender=${gender}` : '' }`;
    return this.http
      .get<Response>(url)
      .pipe(map((response: Response) => response.results));
  }
}
