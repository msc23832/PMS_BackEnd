import { Component, OnInit,AfterViewInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-reservation2',
  templateUrl: './reservation2.component.html',
  styleUrls: ['./reservation2.component.css']
})
export class Reservation2Component implements OnInit,AfterViewInit {
  date = new Date();
  constructor() { 

  }

  ngOnInit() {
    // $.getScript('../assets/js/datepicker.js');
  }
  ngAfterViewInit() {
    $.getScript('../assets/js/datepicker.js');
   }
}
