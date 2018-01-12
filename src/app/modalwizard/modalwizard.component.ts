import { Component, OnInit,AfterViewInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-modalwizard',
  templateUrl: './modalwizard.component.html',
  styleUrls: ['./modalwizard.component.css']
})
export class ModalwizardComponent implements OnInit,AfterViewInit {

  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit() {
     $.getScript('../assets/js/paper-bootstrap-wizard.js');
     $.getScript('../assets/js/bootstrap.js');
     
   }
}
