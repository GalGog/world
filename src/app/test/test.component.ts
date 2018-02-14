import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  template: ` 
    
    <h2>{{"Hello" + name}}</h2>
    <button (click)="fireEvent()" )>Send Event</button>
    
  <div *ngFor="let color of colors; even as e">
    <h2>{{e}} {{color}}</h2>
  </div>
  
  `,
  styles: []
})
export class TestComponent implements OnInit {
 public colors = ["red", "blue", "green", "yellow"];
 @Input('parentData') public  name;
 @Output() public childEvent = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }
  fireEvent(){
    this.childEvent.emit("Hey coder");
  }
}
