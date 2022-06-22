import { Component, OnInit } from '@angular/core';
import { WebServiceService } from 'src/app/shared/web-service.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit {
  UserName:any = "Amrick";

  constructor(private webService: WebServiceService) { 
    this.webService.UserName.subscribe(res =>{
      this.UserName = res;
    })
  }

  ngOnInit(): void {
  }

  onChange(uName: any){
    console.log(uName.value);
    this.webService.UserName.next(uName.value);
  }

}
