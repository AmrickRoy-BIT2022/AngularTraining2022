import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { WebServiceService } from '../../shared/web-service.service';
@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss'],
})
export class DemoComponent implements OnInit {
  array: any = [];
  array2: any = [];
  array3: any = [];
  length: any;
  pagesize = 10;
  startIn = 0;

  displayedColumns: string[] = ['position', 'status', 'cloudcover'];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  dataSource: MatTableDataSource<any> = new MatTableDataSource();
  constructor(public webService: WebServiceService, private router: Router) {}

  ngOnInit(): void {
    let getda = this.webService.getData();
    let getda1 = this.webService.data;
    console.log('getda=============', getda);
    console.log('getda1=============', getda1);
    this.getValue();
  }

  getValue() {
    this.webService.getService().subscribe({
      next: (res: any) => {
        this.array2 = res.dataseries;
        this.array3 = this.array2.slice(this.startIn, this.pagesize);
        console.log(this.array3);
        this.dataSource = this.array3;
        console.log('this.dataSource =>', this.dataSource);
        this.length = this.array2.length;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  onPageFired(event: PageEvent) {
    console.log({ event });
    this.startIn = event.pageIndex;
    this.pagesize = event.pageSize;
    console.log('this.startIn =>', this.startIn);
    console.log('this.pageSize =>', this.pagesize);
    let sizeIn = this.startIn * this.pagesize;
    let array3 = this.array2.slice(sizeIn, this.pagesize + sizeIn);
    this.dataSource = array3;
    console.log('array3 =>', array3);
    console.log('array2 =>', this.array2);
  }

  logout() {
    localStorage.removeItem('isLoggedin');
    this.router.navigate(['/']);
  }

  rxjs() {
    this.router.navigate(['/rxjs']);
  }

  list() {
    this.router.navigate(['/list']);
  }

  select() {
    this.router.navigate(['/select']);
  }
  charts() {
    this.router.navigate(['/charts']);
  }
  bChart(){
    this.router.navigate(['/bar-chart']); 
  }
  upload(){
    this.router.navigate(['/upload']); 
  }

  // getService(){
  //   // let data = this.webService.getService();
  //   this.webService.getValue().subscribe((res: any)=>{
  //     this.array = res;
  //     console.log(this.array);
  //   },err=>{console.log(err);}
  //   )
  // }
}
