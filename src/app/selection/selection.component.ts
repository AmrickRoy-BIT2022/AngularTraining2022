import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.scss']
})
export class SelectionComponent implements OnInit {

  name = 'Angular';
  categories: any = [
    {id: 1, name: 'Laravel'},
    {id: 2, name: 'Codeigniter'},
    {id: 3, name: 'React'},
    {id: 4, name: 'PHP'},
    {id: 5, name: 'Angular'},
    {id: 6, name: 'Vue'},
    {id: 7, name: 'JQuery', disabled: true},
    {id: 8, name: 'Javascript'},
  ];
  selected: any = [
    {id: 5, name: 'Angular'},
    {id: 6, name: 'Vue'}
  ];
  constructor() { }

  ngOnInit(): void {
  }

  getSelectedValue(){
    console.log(this.selected);
  }
}
