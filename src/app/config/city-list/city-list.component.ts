import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.css']
})
export class CityListComponent implements OnInit {

  public loading = false;
  
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  btnAdd() {
    this.router.navigate(['city']);
  }

}
