import { Component, OnInit } from '@angular/core';

import { WebServiceService} from '../../shared/web-service.service'
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  getda:any =[];
  showModal: any;
  constructor(
    public webService :WebServiceService
  ) { }

  ngOnInit(): void {
    this.getda = this.webService.getData()
    let getda1 = this.webService.data
    console.log('getda=============', this.getda)
    console.log('getda1=============', getda1)
  }

}
