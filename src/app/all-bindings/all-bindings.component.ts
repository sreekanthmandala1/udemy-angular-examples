import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-bindings',
  templateUrl: './all-bindings.component.html',
  styleUrls: ['./all-bindings.component.css']
})
export class AllBindingsComponent implements OnInit {
  bName = "text";
  aName = "text";
  TName = false;
  UserName = " ";
  insertedName = "text";

  givenName(event: Event) {
    this.insertedName = (<HTMLInputElement>event.target).value;
  }

  CEvent() {
    this.bName = "changed";
  }
  IEvent(event: Event) {
    this.aName = (<HTMLInputElement>event.target).value;
  }

  constructor() {
    setTimeout(() => {
      this.TName = true;
    }, 3000);
  }

  ngOnInit(): void {

  }

}
