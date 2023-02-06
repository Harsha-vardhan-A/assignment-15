import { Component ,Input, OnChanges ,OnInit,DoCheck, AfterContentInit,AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.css'],
})
export class ChildrenComponent implements OnChanges ,OnInit,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit, AfterViewChecked, OnDestroy{
  @Input() data: string='';
  count: number = 0;
//-Respond when Angular sets or resets data-bound input properties. The method receives a SimpleChanges object of current and previous property values.
  ngOnChanges() {
    this.count++;
    console.log(this.count);
    console.log("onchanges");
  }
  // Initialize the directive or component after Angular first displays the data-bound properties and sets the directive or component's input properties.

  ngOnInit() {
    setTimeout(()=>{
      this.data='oninit'
    },6000)
    console.log("oninit method");
  }
  ngDoCheck(){
    this.data='docheck'
    console.log("docheck");
  }
  ngAfterContentInit()
  {
    this.data='AfterContentInit'
    console.log("AfterContentInit")
  }
  ngAfterContentChecked(){
    console.log("AfterContentChecked")
  }
  ngAfterViewInit(){
    console.log("AfterViewInit");
  }
  ngAfterViewChecked(){
    console.log("AfterViewChecked")
  }
  ngOnDestroy(){
    console.log("OnDestroy")
  }
}
