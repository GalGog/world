import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-test',
  template: ` 
    
    <h2>{{"Hello" + name}}</h2>
    
  <div *ngFor="let color of colors; even as e">
    <h2>{{e}} {{color}}</h2>
  </div>
  
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
}
