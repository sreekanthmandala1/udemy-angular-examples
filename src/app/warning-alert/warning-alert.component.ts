import { Component, OnInit } from '@angular/core';

declare var $: any;
@Component({
  selector: 'app-warning-alert',
  templateUrl: './warning-alert.component.html',
  styleUrls: ['./warning-alert.component.css']
})
export class WarningAlertComponent implements OnInit {
  enablebutton = false;
  serverCreation = "server is not created";
  notSuccess = "this is not success";
  serverName = "sree";
  eventName = "";
  twoWay = "text";

  onServerChange() {
    this.serverCreation = "server was created";
  }
  withSuccess() {
    this.notSuccess = "this is success";
  }
  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
  secondInput(event: Event) {
    this.eventName = (<HTMLInputElement>event.target).value;
  }

  constructor() {
    setTimeout(() => {
      this.enablebutton = true;
    }, 3000);
  }

  ngOnInit() {
    $("#alertone").click(function () {
      alert("hi");
    });
  }
}


