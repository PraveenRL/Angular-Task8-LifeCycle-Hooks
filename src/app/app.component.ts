import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lifecyclehooks';

  name : string = '';
  nameadding : string = 'This is the name';

  receiveName(txt: string){
    this.name = txt;
  }

  changeName(){
    this.nameadding = "Changed Name";
  }

  data : number = 100;

  addNumber():void{
    this.data += 100;
  }

  deleteNumber():void{
    this.data -= 10;
  }

  constructor(){
    console.log(`Constructor = New data is ${this.data}`);
  }

  ngOnChanges(){
    console.log(`ngOnChanges = ${this.data}`);
  }

  ngOnInit(){
    console.log(`ngOnInit = ${this.data}`);
  }

  ngDoCheck(){
    console.log(`ngDoCheck`);
  }

  ngAfterContentInit(){
    console.log(`ngAfterContentInit`);
  }

  ngAfterViewChecked(){
    console.log(`ngAfterViewChecked`)
  }

  ngAfterContentChecked(){
    console.log(`ngAfterContentChecked`);
  }

  ngAfterViewInit(){
    console.log(`ngAfterViewInit`);
  }

  ngOnDestroy(){
    console.log(`ngOnDestroy`);
  }

}
