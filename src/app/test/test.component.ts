import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: ` 
    
    <h2>{{name}}</h2>
    <h2>{{name | lowercase}}</h2>
    <h2>{{name | uppercase}}</h2>
    <h2>{{name | titlecase}}</h2>
    <h2>{{name | slice: 2:6}}</h2>
    <h2>{{person | json}}</h2>
    <h2>{{name | json}}</h2>
    
    <h2>{{5.678 | number:'1.2-3'}}</h2>
    <h2>{{5.678 | number:'3.4-5'}}</h2>
    <h2>{{5.678 | number:'3.1-2'}}</h2>

    <h2>{{0.23 | percent}}</h2>
    <h2>{{0.25| currency}}</h2>
    <h2>{{0.25| currency: 'GBP'}}</h2>
    <h2>{{0.25| currency: 'EUR': 'code'}}</h2>

    <h2>{{date}}</h2>
    <h2>{{date | date:'short'}}</h2>
    <h2>{{date | date:'shortDate'}}</h2>
    <h2>{{date | date:'shortTime'}}</h2>
    

  `,
  styles: []
})
export class TestComponent implements OnInit {
 public  name = "Codeevolution ";
 public message = "Welcom to Codeevolution";
 public  person = {
   "firstName": "Jon",
   "lastName": "Doe"
 }
 public date = new Date();
  constructor() {
  }

  ngOnInit() {}

  }

