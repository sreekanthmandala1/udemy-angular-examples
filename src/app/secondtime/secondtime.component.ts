import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-secondtime',
  templateUrl: './secondtime.component.html',
  styleUrls: ['./secondtime.component.css']
})
export class SecondtimeComponent implements OnInit {
  sMyName = "sreekanth";
  allowNewNetwork = false;
  notSuccess = "This is not success";
  getMyName = "i am awesome";
  writeSomething = "corona is a virus"
  propertyB = false;
  clickE = "hello this is click event"
  inputE = "";
  twoWayD = "";

  Success() {
    this.notSuccess = "success"
  }
  clickEvent() {
    this.clickE = "after clicking clickEvent";
  }
  onUpdateInput(event: Event) {
    this.inputE = (<HTMLInputElement>event.target).value;
  }


  constructor() {
    setTimeout(() => {
      this.allowNewNetwork = true;
    }, 2000);

    setTimeout(() => {
      this.propertyB = true;
    }, 2000);


  }





  ngOnInit(): void {

  }

}
