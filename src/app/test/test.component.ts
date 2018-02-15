import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  template: ` 
    
    <h2>{{name}}</h2>
  
  `,
  styles: []
})
export class TestComponent implements OnInit {
 public colors = ["red", "blue", "green", "yellow"];
 @Input('parentData') public  name;

  constructor() {
  }

  ngOnInit() {
  }
  fireEvent(){
    this.childEvent.emit("Hey coder");
  }
}
