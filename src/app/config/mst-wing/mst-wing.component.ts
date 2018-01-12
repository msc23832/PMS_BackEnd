import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MstwingService } from '../services/mstwing.service';
import { MstbuildingService } from '../services/mstbuilding.service';

@Component({
  selector: 'app-mst-wing',
  templateUrl: './mst-wing.component.html',
  styleUrls: ['./mst-wing.component.css'],
  providers: [MstwingService, MstbuildingService]
})
export class MstWingComponent implements OnInit {

  public loading = false;
  private _datamstbuilding;
  private date: Date;
  private id: number;
  private mode: string;
  wingCode: string;
  wingName: string;
  wingBuilding: string;
  active: boolean;

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private mstwingService: MstwingService,
    private mstbuildingService: MstbuildingService
  ) {
    this.date = new Date;
    this.id = 0;
    this.mode = 'ADD';
    this.wingCode = '';
    this.wingName = '';
    this.wingBuilding = '';
    this.active = false;
  }

  ngOnInit() {
    this.getDataOther();

    this.activeRoute.params.subscribe(params => {
      if (params['id']) {
        const id = params['id'];
        this.getDataByID(id);
        this.mode = 'EDIT';
        this.id = id;
      }
    });
  }

  getDataOther() {
    this.date = new Date();
    this.mstbuildingService.getData().subscribe(
      data => {
        this._datamstbuilding = data;
      },
      err => {
        console.log(err);
      });
  }

  getDataByID(id) {
    this.loading = true;
    this.mstwingService.getWingByID(id).subscribe(
      _wing => {
        this.wingCode = _wing[0].code_wing;
        this.wingName = _wing[0].name_wing;
        this.wingBuilding = _wing[0].code_building;
        this.active = _wing[0].active;
        this.loading = false;
        console.log(_wing);
      }, error => {
        this.loading = false;
        console.log(error);
      });
  }

  btnSave() {
    const wing = {
      wingCode: this.wingCode,
      wingName: this.wingName,
      wingBuilding: this.wingBuilding,
      active: this.active
    };

    // console.log(brand);
    if ((this.wingCode !== '') && (this.wingName !== '') && (this.wingBuilding !== '')) {
      this.loading = true;
      if (this.mode === 'EDIT') {
        this.mstwingService.updateData(this.id, wing).subscribe(
          data => {
            this.loading = false;
            this.router.navigate(['mst-wing-list']);
          },
          err => {
            this.loading = false;
            console.log(err);
          }
        );
      } else {
        console.log(wing);
        this.mstwingService.insertData(wing).subscribe(
          datas => {
            this.loading = false;
            this.router.navigate(['mst-wing-list']);
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
    this.router.navigate(['mst-wing-list']);
  }

}
