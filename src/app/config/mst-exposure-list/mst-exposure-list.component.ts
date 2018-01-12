import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MstexposureService } from '../services/mstexposure.service';

@Component({
  selector: 'app-mst-exposure-list',
  templateUrl: './mst-exposure-list.component.html',
  styleUrls: ['./mst-exposure-list.component.css'],
  providers: [MstexposureService]
})
export class MstExposureListComponent implements OnInit {

  public loading = false;
  private _data;
  private prop;
  date: Date;
  private DeleteID: Number;
  public disbtnAdd = true;

  constructor(
    private router: Router,
    private mstexposureService: MstexposureService
  ) {
    this.DeleteID = null;
  }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.loading = true;
    this.date = new Date();
    this.mstexposureService.getData().subscribe(
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
    this.router.navigate(['mst-exposure', id]);
  }

  sendDelete(id) {
    this.DeleteID = id;
    console.log(this.DeleteID);
  }

  btnDelete(id) {
    this.loading = true;
    this.mstexposureService.deleteData(id).subscribe(
      datas => {
        this.getData();
      },
      err => {
        console.log(err);
        this.loading = false;
      });
  }

  btnAdd() {
    this.router.navigate(['mst-exposure']);
  }

}
