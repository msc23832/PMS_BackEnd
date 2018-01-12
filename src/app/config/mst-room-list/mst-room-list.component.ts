import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MstroomService } from '../services/mstroom.service';

@Component({
  selector: 'app-mst-room-list',
  templateUrl: './mst-room-list.component.html',
  styleUrls: ['./mst-room-list.component.css'],
  providers: [MstroomService]
})
export class MstRoomListComponent implements OnInit {

  public loading = false;

  private _data;
  private prop;
  date: Date;
  private DeleteID: Number;
  public disbtnAdd = true;

  constructor(
    private router: Router,
    private mstroomService: MstroomService
  ) {
    this.DeleteID = null;
  }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.loading = true;
    this.date = new Date();
    this.mstroomService.getData().subscribe(
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

  btnAdd() {
    this.router.navigate(['mst-room']);
  }

  btnEdit(id) {
    this.router.navigate(['mst-room', id]);
  }

  sendDelete(id) {
    this.DeleteID = id;
    console.log(this.DeleteID);
  }

  btnDelete(id) {
    this.loading = true;
    this.mstroomService.deleteData(id).subscribe(
      datas => {
        this.getData();
      },
      err => {
        console.log(err);
        this.loading = false;
      });
  }

}
