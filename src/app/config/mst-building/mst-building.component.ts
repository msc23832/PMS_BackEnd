import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MstbuildingService } from '../services/mstbuilding.service';
import { PropertyService } from '../services/property.service';
import { MstwingService } from '../services/mstwing.service';

@Component({
  selector: 'app-mst-building',
  templateUrl: './mst-building.component.html',
  styleUrls: ['./mst-building.component.css'],
  providers: [MstbuildingService, PropertyService, MstwingService]
})
export class MstBuildingComponent implements OnInit {

  public loading = false;
  private _dataproperty;
  private _datamstwing;
  private date: Date;
  private id: number;
  private mode: string;
  buildingCode: string;
  buildingName: string;
  buildingProperty: string;
  buildingWing: string;
  buildingDesc: string;
  active: boolean;

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private propertyService: PropertyService,
    private mstbuildingService: MstbuildingService,
    private mstwingService: MstwingService
  ) {
    this.date = new Date;
    this.id = 0;
    this.mode = 'ADD';
    this.buildingCode = '';
    this.buildingName = '';
    this.buildingProperty = '';
    this.buildingWing = '';
    this.buildingDesc = '';
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
    this.propertyService.getData().subscribe(
      data => {
        this._dataproperty = data;
      },
      err => {
        console.log(err);
      });

    this.mstwingService.getData().subscribe(
      data => {
        this._datamstwing = data;
      },
      err => {
        console.log(err);
      });
  }

  getDataByID(id) {
    this.loading = true;
    this.mstbuildingService.getBuildingByID(id).subscribe(
      _building => {
        this.buildingCode = _building[0].code_building;
        this.buildingName = _building[0].name_building;
        this.buildingProperty = _building[0].code_property;
        this.buildingWing = _building[0].code_wing;
        this.buildingDesc = _building[0].desc_building;
        this.active = _building[0].active;
        this.loading = false;
        console.log(_building);
      }, error => {
        this.loading = false;
        console.log(error);
      });
  }

  btnSave() {
    const building = {
      buildingCode: this.buildingCode,
      buildingName: this.buildingName,
      buildingProperty: this.buildingProperty,
      buildingWing: this.buildingWing,
      buildingDesc: this.buildingDesc,
      active: this.active
    };

    // console.log(brand);
    if ((this.buildingCode !== '') && (this.buildingName !== '') && (this.buildingProperty !== '') && (this.buildingWing !== '')) {
      this.loading = true;
      if (this.mode === 'EDIT') {
        this.mstbuildingService.updateData(this.id, building).subscribe(
          data => {
            this.loading = false;
            this.router.navigate(['mst-building-list']);
          },
          err => {
            this.loading = false;
            console.log(err);
          }
        );
      } else {
        console.log(building);
        this.mstbuildingService.insertData(building).subscribe(
          datas => {
            this.loading = false;
            this.router.navigate(['mst-building-list']);
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
    this.router.navigate(['mst-building-list']);
  }

}
