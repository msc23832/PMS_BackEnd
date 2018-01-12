import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MstfloorService } from '../services/mstfloor.service';

@Component({
  selector: 'app-mst-floor-list',
  templateUrl: './mst-floor-list.component.html',
  styleUrls: ['./mst-floor-list.component.css'],
  providers: [MstfloorService]
})
export class MstFloorListComponent implements OnInit {

  public loading = false;
  private _data;
  private prop;
  date: Date;
  private DeleteID: Number;
  public disbtnAdd = true;

  constructor(
    private router: Router,
    private mstfloorService: MstfloorService
  ) {
    this.DeleteID = null;
  }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.loading = true;
    this.date = new Date();
    this.mstfloorService.getData().subscribe(
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
    this.router.navigate(['mst-floor', id]);
  }

  sendDelete(id) {
    this.DeleteID = id;
    console.log(this.DeleteID);
  }

  btnDelete(id) {
    this.loading = true;
    this.mstfloorService.deleteData(id).subscribe(
      datas => {
        this.getData();
      },
      err => {
        console.log(err);
        this.loading = false;
      });
  }

  btnAdd() {
    this.router.navigate(['mst-floor']);
  }

}
