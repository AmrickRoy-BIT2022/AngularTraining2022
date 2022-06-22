import { Component, OnInit } from '@angular/core';
import {
  from,
  interval,
  of,
  Subscription,
  timer,
  toArray,
  take,
  map,
  pluck,
  filter,
} from 'rxjs';
import { WebServiceService } from 'src/app/shared/web-service.service';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss'],
})
export class RxjsComponent implements OnInit {
  obsMsg: any;
  ofMsg: any;
  fromMsg: any;
  stdMsg: any;
  videoSub: Subscription;
  empSub: Subscription;
  stdSub: Subscription;
  UserName:any = "Amrick";
  users: any = from([
    { name: 'amrick', skill: 'angular' },
    { name: 'soubhik', skill: 'node' },
    { name: 'rubel', skill: 'magento' },
  ]);

  constructor(private webService: WebServiceService) {
    this.webService.UserName.subscribe(res =>{
      this.UserName = res;
    })
  }

  ngOnInit(): void {
    let getItems = new Promise((resolve, reject) => {
      // resolve('promise is resolved');
      reject('promise is rejected');
    });
    getItems
      .then((res) => {
        console.log('then code =>', res);
      })
      .catch((res) => {
        console.log('catch code =>', res);
      });

    // INTERVAL AND TIMER IN ANGULAR (BOTH ARE SAME)
    // Timer(delay, interval)
    // const braoadcastVideos = interval(2000);
    const braoadcastVideos = timer(1000, 2000);
    this.videoSub = braoadcastVideos.subscribe((res) => {
      console.log(res);
      this.obsMsg = 'video ' + res;
      this.webService.print(this.obsMsg, 'elContainer');
      if (res >= 2) {
        this.videoSub.unsubscribe();
      }
    });

    // OF operator in rxjs..
    const users = of({ name: 'amrick', name2: 'rohan' });
    users.subscribe((res) => {
      this.ofMsg = res;
      console.log('ofMsg => ', res);
    });

    // FROM OPERATOR in rxjs..
    const cars = from(['audi', 'bmw', 'yamaha']);
    cars.subscribe((res) => {
      this.fromMsg = res;
      this.webService.print(this.fromMsg, 'elContainer2');
      console.log('fromMsg => ', res);
    });

    //toArray operator in rxjs..
    const empNo = interval(1000);
    this.empSub = empNo.pipe(take(5), toArray()).subscribe((res) => {
      console.log(res);
    });
    // it converts an obs stream into an array..
    this.users.pipe(toArray()).subscribe((res: any) => {
      console.log(res);
    });

    // map operator in rxjs..
    const stdNo = interval(1000);
    this.stdSub = stdNo.pipe(map((val) => val * 2)).subscribe((res) => {
      console.log(res);
      this.stdMsg = 'studentId: ' + res;
      this.webService.print(this.stdMsg, 'elContainer3');
      if (res >= 5) {
        this.stdSub.unsubscribe();
      }
    });

    // pluck opearator in rxjs..
    this.users.pipe(pluck('name'), toArray()).subscribe((res: any) => {
      console.log(res);
    });

    // filter operator in rxjs..
    this.users.pipe(filter((data: any) => data.name == 'amrick'), toArray()).subscribe((res: any) => {
      console.log(res);
    });
  }
}
