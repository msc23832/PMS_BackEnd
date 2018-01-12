import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MstbedtypeService } from '../services/mstbedtype.service';

@Component({
  selector: 'app-mst-bed-type-list',
  templateUrl: './mst-bed-type-list.component.html',
  styleUrls: ['./mst-bed-type-list.component.css'],
  providers: [MstbedtypeService]
})
export class MstBedTypeListComponent implements OnInit {

  public loading = false;

  private _data;
  private prop;
  date: Date;
  private DeleteID: Number;
  public disbtnAdd = true;

  constructor(
    private router: Router,
    private mstbedtypeService: MstbedtypeService
  ) {
    this.DeleteID = null;
  }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.loading = true;
    this.date = new Date();
    this.mstbedtypeService.getData().subscribe(
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
    this.router.navigate(['mst-bed-type', id]);
  }

  sendDelete(id) {
    this.DeleteID = id;
    console.log(this.DeleteID);
  }

  btnDelete(id) {
    this.loading = true;
    this.mstbedtypeService.deleteData(id).subscribe(
      datas => {
        this.getData();
      },
      err => {
        console.log(err);
        this.loading = false;
      });
  }

  btnAdd() {
    this.router.navigate(['mst-bed-type']);
  }

}
