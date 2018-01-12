import { Component, OnInit,AfterViewInit} from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-individual',
  templateUrl: './individual.component.html',
  styleUrls: ['./individual.component.css']
})
export class IndividualComponent implements OnInit,AfterViewInit {
  date = new Date();
  data = [];

  constructor() { 
    this.data = [
      {
        name: 'Hummmonds, Johny',
        room: '05002',
        status: 'checked out',
        ck: '2'
      },
      {
        name: 'Antiel, Rob',
        room: '01265',
        status: 'due out',
        ck: '3'
      },
      {
        name: 'Damn, Saimond',
        room: '08525',
        status: 'checked in',
        ck: '1'
      },
      {
        name: 'Franciscy G, Gergo',
        room: '04585',
        status: 'due out',
        ck: '3'
      }
      
    ];
  }

  ngOnInit() {
    
  }
  ngAfterViewInit(){
    $.getScript('../assets/js/datepicker.js');
  }
  getColor(status){
    switch (status){
      case '1' : 
        return '#7bb62f';
      case '2' : 
        return '#de0808';
      case '3' : 
        return '#737373';
    }
  }
}
