import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable, observable, of, Subject } from 'rxjs';
import { map, catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class WebServiceService {

  UserName = new Subject<any>();

  url =
    'https://www.7timer.info/bin/astro.php?lon=113.2&lat=23.1&ac=0&unit=metric&output=json';

  constructor(public httpClient: HttpClient) {}

  getData() {
    return ['abc', 'bcd', 'xyz'];
  }

  data = {
    name: 'abc',
    email: 'abc@gmail.com',
  };

  getService(): Observable<any> {
    return this.httpClient.get(this.url).pipe(
      map((val) => {
        let result = val;
        return result;
      })
    );
  }

  getList(){
    return this.httpClient.get('https://date.nager.at/api/v2/publicholidays/2020/US');
  }

  print(val: string, containerId: string) {
    let el = document.createElement('li');
    el.innerText = val;
    document.getElementById(containerId).appendChild(el);
  }
}
