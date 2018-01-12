import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {

  public loading = false;
  
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  btnSave() {
    this.router.navigate(['city-list']);
  }

}
