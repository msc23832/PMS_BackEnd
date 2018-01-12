import { Component, OnInit,AfterViewInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls:[ './test1.component.css']
})
export class Test1Component implements OnInit,AfterViewInit {

  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    $.getScript('//maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js');
    
    // $(document).ready(function () {
      
    //           $('.collapse').on('shown.bs.collapse', function (e) {
    //               $('.collapse').not(this).removeClass('in');
    //           });
      
    //           $('[data-toggle=collapse]').click(function (e) {
    //               $('[data-toggle=collapse]').parent('li').removeClass('active');
    //               $(this).parent('li').toggleClass('active');
    //           });
      
    //       });
   }
}
