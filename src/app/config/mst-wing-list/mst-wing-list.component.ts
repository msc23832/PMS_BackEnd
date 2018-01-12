import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MstwingService } from '../services/mstwing.service';

@Component({
  selector: 'app-mst-wing-list',
  templateUrl: './mst-wing-list.component.html',
  styleUrls: ['./mst-wing-list.component.css'],
  providers: [MstwingService]
})
export class MstWingListComponent implements OnInit {

  public loading = false;

  private _data;
  private prop;
  date: Date;
  private DeleteID: Number;
  public disbtnAdd = true;

  constructor(
    private router: Router,
    private mstwingService: MstwingService
  ) {
    this.DeleteID = null;
  }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.loading = true;
    this.date = new Date();
    this.mstwingService.getData().subscribe(
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
    this.router.navigate(['mst-wing']);
  }

  btnEdit(id) {
    this.router.navigate(['mst-wing', id]);
  }

  sendDelete(id) {
    this.DeleteID = id;
    console.log(this.DeleteID);
  }

  btnDelete(id) {
    this.loading = true;
    this.mstwingService.deleteData(id).subscribe(
      datas => {
        this.getData();
      },
      err => {
        console.log(err);
        this.loading = false;
      });
  }

}
