import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MstroomtypeService } from '../services/mstroomtype.service';

@Component({
  selector: 'app-mst-room-type-list',
  templateUrl: './mst-room-type-list.component.html',
  styleUrls: ['./mst-room-type-list.component.css'],
  providers: [MstroomtypeService]
})
export class MstRoomTypeListComponent implements OnInit {

  public loading = false;

  private _data;
  private prop;
  date: Date;
  private DeleteID: Number;
  public disbtnAdd = true;

  constructor(
    private router: Router,
    private mstroomtypeService: MstroomtypeService
  ) {
    this.DeleteID = null;
  }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.loading = true;
    this.date = new Date();
    this.mstroomtypeService.getData().subscribe(
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
    this.router.navigate(['mst-room-type']);
  }

  btnEdit(id) {
    this.router.navigate(['mst-room-type', id]);
  }

  sendDelete(id) {
    this.DeleteID = id;
    console.log(this.DeleteID);
  }

  btnDelete(id) {
    this.loading = true;
    this.mstroomtypeService.deleteData(id).subscribe(
      datas => {
        this.getData();
      },
      err => {
        this.loading = false;
        console.log(err);
      });
  }

}
