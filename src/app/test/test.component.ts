import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
  <h2>
    Welcome  {{name}}
  </h2>

  <input [id]="myId" type="text" value="name">
  <input [disabled] = "isDisabled" id = {{myId}} type="text" value="name">


  <h2>{{15+2}}</h2>
    <h2>weclome + {{name}}</h2>
    <h2>{{name.length}}</h2>
    <h2>{{name.toUpperCase()}}</h2>
    <h2>{{greetUser()}}</h2>
    <h2>{{siteUrl}}</h2>

    `,
  styles: []
})
export class TestComponent implements OnInit {

public  name  = 'ODDde';
public myId = "testId";
public  siteUrl = window.location.href;
public isDisabled = false;

  constructor() {
    console.log('name');
    console.log(name);
  }

  ngOnInit() {
  }
  greetUser(){
    return "Hello" + this.name;
  }
}
