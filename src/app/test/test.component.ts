import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: ` 
    
    <h2>{{name}}</h2>
    <h2>{{name | lowercase}}</h2>
    <h2>{{name | uppercase}}</h2>
    <h2>{{name | titlecase}}</h2>
    <h2>{{name | slice: 2:10}}</h2>




  `,
  styles: []
})
export class TestComponent implements OnInit {
 public  name = "Having 1 years of experience as a JavaScript Developer so far, I build websites and applications based on web standards, cross browser support, responsive design and clean code. ";
 public message = "Welcom to Codeevolution";
 public  person = {
   "firstName": "Jon",
   "lastName": "Doe"
 }
  constructor() {
  }

  ngOnInit() {}

  }

