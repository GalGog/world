import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
  <h2>Welcome  {{name}}</h2>
  <button (click)="onClick($event)">Greet</button>
  <button (click)="greeting = 'welcom wishas' ">Greet</button>
  
  
  
  
  <h2 [style.color]="'orange'">Style code</h2>
  <h2 [style.color]="highlightColor">Style Binging</h2>
  <h2 [ngStyle]="titleStyle">Style Binging 3 </h2>
  
  
  <h2 class="text-success">Codeevolution</h2>
  <h2 [class] = "successClass">Codeevolution</h2>
  <h2 [class.text-danger] = "hasError">Codeevolution</h2>
  

  <input [id]="myId" type="text" value="name">
  <input [disabled] = "isDisabled" id = {{myId}} type="text" value="name">

  <h3> lesson 10
  <input #myInput type="text">
  <button (click) = "logMessage(myInput.value)">Log</button>
  </h3>


  <h2>{{45+2}}</h2>
    <h2>weclome + {{name}}</h2>
    <h2>{{name.length}}</h2>
    <h2>{{name.toUpperCase()}}</h2>
    <h2>{{greetUser()}}</h2>
    <h2>{{siteUrl}}</h2>
    
    `,
  styles: [`
  .text-success{
    color: green;
  }
    .text-danger{
      color: red;
    }
    .text-special{
      font-style: normal;
    }
  `]
})
export class TestComponent implements OnInit {

public  name  = 'Odo';
public myId = "testId";
public  siteUrl = window.location.href;
public isDisabled = false;
public  successClass = "text-success";
public hasError = false;
public isSpecial = true;
public highlightColor = "orange";
public titleStyle = {
  color: "blue",
  fondStyle: "italic",
}
public greeting = "";

  constructor() {
    console.log('name');
    console.log(name);
  }

  ngOnInit() {
  }
  greetUser(){
    return "Hello" + this.name;
  }
  onClick(event){
    console.log(event);
    this.greeting = event.type;
  }

  logMessage (value){
    console.log(value);
  }
}
