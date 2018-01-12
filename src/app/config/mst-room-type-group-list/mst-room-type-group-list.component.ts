import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MstroomtypegroupService } from '../services/mstroomtypegroup.service';

@Component({
  selector: 'app-mst-room-type-group-list',
  templateUrl: './mst-room-type-group-list.component.html',
  styleUrls: ['./mst-room-type-group-list.component.css'],
  providers: [MstroomtypegroupService]
})
export class MstRoomTypeGroupListComponent implements OnInit {

  public loading = false;
  private _data;
  private prop;
  date: Date;
  private DeleteID: Number;
  public disbtnAdd = true;

  constructor(
    private router: Router,
    private mstroomtypegroupService: MstroomtypegroupService
  ) {
    this.DeleteID = null;
  }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.loading = true;
    this.date = new Date();
    this.mstroomtypegroupService.getData().subscribe(
      data => {
        this._data = data;
        // console.log(this._data);
        this.loading = false;
        this.disbtnAdd = false;
      },
      err => {
        this.loading = false;
        this.disbtnAdd = false;
        console.log(err);
      });
  }

  btnEdit(id) {
    this.router.navigate(['mst-room-type-group', id]);
  }

  sendDelete(id) {
    this.DeleteID = id;
    console.log(this.DeleteID);
  }

  btnDelete(id) {
    this.loading = true;
    this.mstroomtypegroupService.deleteData(id).subscribe(
      datas => {
        this.getData();
      },
      err => {
        console.log(err);
        this.loading = false;
      });
  }

  btnAdd() {
    this.router.navigate(['mst-room-type-group']);
  }

}
