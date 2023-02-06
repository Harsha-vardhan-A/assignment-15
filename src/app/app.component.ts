import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'lifecycle';
  arb: string = 'abc';
  abc:string='pipes';
  constructor(){
    //this.arb='decfsg';
  //   setTimeout(() => {
  //     alert("k")
  //   this.arb='decfsg';
  // },0);

}
}
