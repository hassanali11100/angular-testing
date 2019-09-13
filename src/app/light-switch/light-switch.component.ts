import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-light-switch',
  templateUrl: './light-switch.component.html',
  styleUrls: ['./light-switch.component.scss']
})
export class LightSwitchComponent implements OnInit {
  isOn: boolean = false;

  @Input() goodByeMessage: string;
  @Output() loggedOutEvent = new EventEmitter();

  logOut() {
    this.loggedOutEvent.emit(this.goodByeMessage);
  }

  constructor() { }

  ngOnInit() {
  }

  clicked() { this.isOn = !this.isOn; }
  get message() { return `The light is ${this.isOn ? 'On' : 'Off'}`}
}
