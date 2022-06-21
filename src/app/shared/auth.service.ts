import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  url =
    'https://www.7timer.info/bin/astro.php?lon=113.2&lat=23.1&ac=0&unit=metric&output=json';
  constructor(private httpClient: HttpClient) {}

  getdata(): Observable<any> {
    return this.httpClient.get(this.url).pipe(
      map((val) => {
        let result = val;
        return result;
      }),
      catchError((error) => {
        return error;
      })
    );
  }

  isAuthenticated() {
    const authData = JSON.parse(localStorage.getItem('token'));
    console.log(authData);
    if (authData) {
      return true;
    } else {
      return false;
    }
  }

  gettoken() {
    // console.log('!!localStorage.getItem(isLoggedin)', !!localStorage.getItem('isLoggedin'))
     return !!localStorage.getItem('isLoggedin');
     }

}
