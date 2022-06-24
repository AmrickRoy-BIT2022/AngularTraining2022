import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-permission-list',
  templateUrl: './permission-list.component.html',
  styleUrls: ['./permission-list.component.scss'],
})
export class PermissionListComponent implements OnInit {
  permissions: any = [
    { name: 'Dashboard', isActive: false, rating: 4 },
    { name: 'Manage User', isActive: false, rating: 3 },
    { name: 'Inspection Status', isActive: false, rating: 4 },
    { name: 'Manage Payment', isActive: false, rating: 2 },
    { name: 'Coupon', isActive: false, rating: 1 },
    { name: 'Contact Us', isActive: false, rating: 5 },
    { name: 'About Us', isActive: false, rating: 4 },
    { name: 'Privacy Policy', isActive: false, rating: 3 },
  ];
  constructor() {}

  ngOnInit(): void {} 
}
