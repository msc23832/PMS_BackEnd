import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BrandService } from '../services/brand.service';

@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.component.html',
  styleUrls: ['./brand-list.component.css'],
  providers: [BrandService]
})
export class BrandListComponent implements OnInit {

  public loading = false;

  private _data;
  private prop;
  date: Date;
  private DeleteID: Number;
  public disbtnAdd = true;

  constructor(private router: Router, private brandService: BrandService) {
    this.DeleteID = null;
  }

  ngOnInit() {
    this.getData();
  }

  btnAdd() {
    this.router.navigate(['brand']);
  }

  getData() {
    this.loading = true;
    this.date = new Date();
    this.brandService.getData().subscribe(
      data => {
        this._data = data;
        this.loading = false;
        this.disbtnAdd = false;
        // console.log(this._data);
      },
      err => {
        this.loading = false;
        this.disbtnAdd = false;
        console.log(err);
      });
  }

  btnEdit(id) {
    this.router.navigate(['brand', id]);
  }

  sendDelete(id) {
    this.DeleteID = id;
    console.log(this.DeleteID);
  }

  btnDelete(id) {
    this.loading = true;
    this.brandService.deleteData(id).subscribe(
      datas => {
        this.getData();
      },
      err => {
        this.loading = false;
        console.log(err);
      });
  }

}
