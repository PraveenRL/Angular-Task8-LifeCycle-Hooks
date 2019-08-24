import { Component, OnInit, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges {

  @Input() receiveName : string;

  constructor() { }

  ngOnInit() {
    console.log('ngOnInit hook is called');
  }

  ngOnChanges(){
    console.log('ngOnChanges hooks is called');
  }

}
