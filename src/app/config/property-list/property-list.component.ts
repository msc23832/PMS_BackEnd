import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PropertyService } from '../services/property.service';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css'],
  providers: [PropertyService]
})
export class PropertyListComponent implements OnInit {

  public loading = false;

  private _data;
  private prop;
  date: Date;
  private DeleteID: Number;
  public disbtnAdd = true;

  constructor(private router: Router, private propertyService: PropertyService) {
    this.DeleteID = null;
  }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.loading = true;
    this.date = new Date();
    this.propertyService.getData().subscribe(
      data => {
        this._data = data;
        this.loading = false;
        this.disbtnAdd = false;
        // console.log(this._data);
      },
      err => {
        this.loading = false;
        this.disbtnAdd = false;
        console.log(err);
      });
  }

  btnAdd() {
    this.router.navigate(['property']);
  }

  btnEdit(id) {
    this.router.navigate(['property', id]);
  }

  sendDelete(id) {
    this.DeleteID = id;
    console.log(this.DeleteID);
  }

  btnDelete(id) {
    this.loading = true;
    this.propertyService.deleteData(id).subscribe(
      datas => {
        this.getData();
      },
      err => {
        this.loading = false;
        console.log(err);
      });
  }
}
