import { Component, OnInit } from '@angular/core';

import { WebServiceService } from '../../shared/web-service.service';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  getda: any = [];
  showModal: any;
  myHolidayDates = [
    new Date('6/1/2022'),
    new Date('6/20/2022'),
    new Date('6/17/2022'),
    new Date('6/25/2022'),
    new Date('6/4/2022'),
    new Date('6/7/2022'),
    new Date('6/6/2022'),
    new Date('6/11/2022'),
    new Date('6/26/2022'),
    new Date('6/25/2022'),
  ];
  minDate = new Date();
  
  constructor(public webService: WebServiceService) {}

  ngOnInit(): void {
    this.getda = this.webService.getData();
    let getda1 = this.webService.data;
    console.log('getda=============', this.getda);
    console.log('getda1=============', getda1);
  }

  myHolidayFilter = (d: Date): boolean => {
    const time = d.getTime();
    console.log("time =>",time);
    return !this.myHolidayDates.find((x) => x.getTime() == time);
  };
}
