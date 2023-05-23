import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User, API } from './data';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = API.API_URL;

  constructor(private http: HttpClient) {}

  getRandomUsers(results: number, gender?: string): Observable<User[]> {
    let url = `${this.apiUrl}?results=${results}`;
    if (gender) {
      url += `&gender=${gender}`;
    }
    return this.http.get<any>(url).pipe(
      map((response) => {
        const users: User[] = [];
        for (const user of response.results) {
          const newUser: User = {
            firstName: user.name.first,
            lastName: user.name.last,
            image: user.picture.large,
            address: `${user.location.street.name}, ${user.location.city}, ${user.location.country}`,
            email: user.email,
            age: user.dob.age,
            phone: user.phone,
          };
          users.push(newUser);
        }
        return users;
      })
    );
  }
}
