import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {

  public loading = false;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  btnAdd() {
    this.router.navigate(['country']);
  }

}
