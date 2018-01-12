import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoomtypePropertyService } from '../services/roomtype-property.service';

@Component({
  selector: 'app-roomtype-property-link-list',
  templateUrl: './roomtype-property-link-list.component.html',
  styleUrls: ['./roomtype-property-link-list.component.css'],
  providers: [RoomtypePropertyService]
})
export class RoomtypePropertyLinkListComponent implements OnInit {

  public loading = false;

  private _data;
  private prop;
  date: Date;
  private DeleteID: Number;
  public disbtnAdd = true;

  constructor(private router: Router, private roomtypePropertyService: RoomtypePropertyService) {
    this.DeleteID = null;
  }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.loading = true;
    this.date = new Date();
    this.roomtypePropertyService.getData().subscribe(
      data => {
        this._data = data;
        // console.log(this._data);
        this.disbtnAdd = false;
        this.loading = false;
      },
      err => {
        this.loading = false;
        this.disbtnAdd = false;
        console.log(err);
      });
  }

  btnAdd() {
    this.router.navigate(['roomtype-property-link']);
  }

  btnEdit(id) {
    this.router.navigate(['roomtype-property-link', id]);
  }

  sendDelete(id) {
    this.DeleteID = id;
    console.log(this.DeleteID);
  }

  btnDelete(id) {
    this.loading = true;
    this.roomtypePropertyService.deleteData(id).subscribe(
      datas => {
        this.getData();
      },
      err => {
        console.log(err);
        this.loading = false;
      });
  }

}
