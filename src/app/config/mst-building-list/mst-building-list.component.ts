import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MstbuildingService } from '../services/mstbuilding.service';

@Component({
  selector: 'app-mst-building-list',
  templateUrl: './mst-building-list.component.html',
  styleUrls: ['./mst-building-list.component.css'],
  providers: [MstbuildingService]
})
export class MstBuildingListComponent implements OnInit {

  public loading = false;

  private _data;
  private prop;
  date: Date;
  private DeleteID: Number;
  public disbtnAdd = true;

  constructor(
    private router: Router,
    private mstbuildingService: MstbuildingService
  ) {
    this.DeleteID = null;
  }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.loading = true;
    this.date = new Date();
    this.mstbuildingService.getData().subscribe(
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
    this.router.navigate(['mst-building', id]);
  }

  sendDelete(id) {
    this.DeleteID = id;
    console.log(this.DeleteID);
  }

  btnDelete(id) {
    this.loading = true;
    this.mstbuildingService.deleteData(id).subscribe(
      datas => {
        this.getData();
      },
      err => {
        console.log(err);
        this.loading = false;
      });
  }

  btnAdd() {
    this.router.navigate(['mst-building']);
  }

}
