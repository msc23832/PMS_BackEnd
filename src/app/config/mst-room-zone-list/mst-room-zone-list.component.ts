import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MstroomzoneService } from '../services/mstroomzone.service';

@Component({
  selector: 'app-mst-room-zone-list',
  templateUrl: './mst-room-zone-list.component.html',
  styleUrls: ['./mst-room-zone-list.component.css'],
  providers: [MstroomzoneService]
})
export class MstRoomZoneListComponent implements OnInit {

  public loading = false;
  private _data;
  private prop;
  date: Date;
  private DeleteID: Number;
  public disbtnAdd = true;

  constructor(
    private router: Router,
    private mstroomzoneService: MstroomzoneService
  ) {
    this.DeleteID = null;
  }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.loading = true;
    this.date = new Date();
    this.mstroomzoneService.getData().subscribe(
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
    this.router.navigate(['mst-room-zone', id]);
  }

  sendDelete(id) {
    this.DeleteID = id;
    console.log(this.DeleteID);
  }

  btnDelete(id) {
    this.loading = true;
    this.mstroomzoneService.deleteData(id).subscribe(
      datas => {
        this.getData();
      },
      err => {
        console.log(err);
        this.loading = false;
      });
  }

  btnAdd() {
    this.router.navigate(['mst-room-zone']);
  }

}
