import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
  <h2>
    Welcome  {{name}}
  </h2>
  <h2 class="text-success">Codeevolution</h2>
  <h2 [class] = "successClass">Codeevolution</h2>
  <h2 [class.text-danger] = "hasError">Codeevolution</h2>


  <input [id]="myId" type="text" value="name">
  <input [disabled] = "isDisabled" id = {{myId}} type="text" value="name">


  <h2>{{15+2}}</h2>
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
      font-style: italic;
    }
  `]
})
export class TestComponent implements OnInit {

public  name  = 'ODDde';
public myId = "testId";
public  siteUrl = window.location.href;
public isDisabled = false;
public  successClass = "text-success";
public hasError = false;
public isSpecial = true;

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
