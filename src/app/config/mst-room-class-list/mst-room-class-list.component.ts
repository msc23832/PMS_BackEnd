import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MstroomclassService } from '../services/mstroomclass.service';

@Component({
  selector: 'app-mst-room-class-list',
  templateUrl: './mst-room-class-list.component.html',
  styleUrls: ['./mst-room-class-list.component.css'],
  providers: [MstroomclassService]
})
export class MstRoomClassListComponent implements OnInit {

  public loading = false;

  private _data;
  private prop;
  date: Date;
  private DeleteID: Number;
  public disbtnAdd = true;

  constructor(
    private router: Router,
    private mstroomclassService: MstroomclassService
  ) {
    this.DeleteID = null;
  }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.loading = true;
    this.date = new Date();
    this.mstroomclassService.getData().subscribe(
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
    this.router.navigate(['mst-room-class', id]);
  }

  sendDelete(id) {
    this.DeleteID = id;
    console.log(this.DeleteID);
  }

  btnDelete(id) {
    this.loading = true;
    this.mstroomclassService.deleteData(id).subscribe(
      datas => {
        this.getData();
      },
      err => {
        console.log(err);
        this.loading = false;
      });
  }

  btnAdd() {
    this.router.navigate(['mst-room-class']);
  }
}
