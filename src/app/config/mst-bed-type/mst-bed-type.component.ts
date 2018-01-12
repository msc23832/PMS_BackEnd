import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MstbedtypeService } from '../services/mstbedtype.service';

@Component({
  selector: 'app-mst-bed-type',
  templateUrl: './mst-bed-type.component.html',
  styleUrls: ['./mst-bed-type.component.css'],
  providers: [MstbedtypeService]
})
export class MstBedTypeComponent implements OnInit {

  public loading = false;
  private date: Date;
  private id: number;
  private mode: string;
  bedtypeCode: string;
  bedtypeName: string;
  bedtypeDesc: string;
  active: boolean;

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private mstbedtypeService: MstbedtypeService
  ) {
    this.date = new Date;
    this.id = 0;
    this.mode = 'ADD';
    this.bedtypeCode = '';
    this.bedtypeName = '';
    this.bedtypeDesc = '';
    this.active = false;
  }

  ngOnInit() {
    this.activeRoute.params.subscribe(params => {
      if (params['id']) {
        const id = params['id'];
        this.getDataByID(id);
        this.mode = 'EDIT';
        this.id = id;
      }
    });
  }


  getDataByID(id) {
    this.loading = true;
    this.mstbedtypeService.getBedTypeByID(id).subscribe(
      _building => {
        this.bedtypeCode = _building[0].code_bedtype;
        this.bedtypeName = _building[0].name_bedtype;
        this.bedtypeDesc = _building[0].desc_bedtype;
        this.active = _building[0].active;
        this.loading = false;
        console.log(_building);
      }, error => {
        this.loading = false;
        console.log(error);
      });
  }

  btnSave() {
    const bedtype = {
      bedtypeCode: this.bedtypeCode,
      bedtypeName: this.bedtypeName,
      bedtypeDesc: this.bedtypeDesc,
      active: this.active
    };

    // console.log(brand);
    if ((this.bedtypeCode !== '') && (this.bedtypeName !== '')) {
      this.loading = true;
      if (this.mode === 'EDIT') {
        this.mstbedtypeService.updateData(this.id, bedtype).subscribe(
          data => {
            this.loading = false;
            this.router.navigate(['mst-bed-type-list']);
          },
          err => {
            this.loading = false;
            console.log(err);
          }
        );
      } else {
        console.log(bedtype);
        this.mstbedtypeService.insertData(bedtype).subscribe(
          datas => {
            this.loading = false;
            this.router.navigate(['mst-bed-type-list']);
          },
          err => {
            this.loading = false;
            console.log(err);
          }
        );
      }
    }
  }

  btnCancel() {
    this.router.navigate(['mst-bed-type-list']);
  }

}
