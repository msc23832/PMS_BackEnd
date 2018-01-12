import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MstroomfeaturesService } from '../services/mstroomfeatures.service';

@Component({
  selector: 'app-mst-room-features-list',
  templateUrl: './mst-room-features-list.component.html',
  styleUrls: ['./mst-room-features-list.component.css'],
  providers: [MstroomfeaturesService]
})
export class MstRoomFeaturesListComponent implements OnInit {

  public loading = false;
  private _data;
  private prop;
  date: Date;
  private DeleteID: Number;
  public disbtnAdd = true;

  constructor(
    private router: Router,
    private mstroomfeaturesService: MstroomfeaturesService
  ) {
    this.DeleteID = null;
  }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.loading = true;
    this.date = new Date();
    this.mstroomfeaturesService.getData().subscribe(
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
    this.router.navigate(['mst-room-features', id]);
  }

  sendDelete(id) {
    this.DeleteID = id;
    console.log(this.DeleteID);
  }

  btnDelete(id) {
    this.loading = true;
    this.mstroomfeaturesService.deleteData(id).subscribe(
      datas => {
        this.getData();
      },
      err => {
        console.log(err);
        this.loading = false;
      });
  }

  btnAdd() {
    this.router.navigate(['mst-room-features']);
  }

}
