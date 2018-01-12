import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PropertyService } from '../services/property.service';
import { MstroomtypeService } from '../services/mstroomtype.service';
import { MstbedtypeService } from '../services/mstbedtype.service';
import { MstbuildingService } from '../services/mstbuilding.service';
import { MstwingService } from '../services/mstwing.service';
import { RoomtypePropertyService } from '../services/roomtype-property.service';

@Component({
  selector: 'app-roomtype-property-link',
  templateUrl: './roomtype-property-link.component.html',
  styleUrls: ['./roomtype-property-link.component.css'],
  providers: [RoomtypePropertyService, PropertyService, MstroomtypeService, MstbedtypeService, MstbuildingService, MstwingService]
})
export class RoomtypePropertyLinkComponent implements OnInit {

  public loading = false;

  private _dataproperty;
  private _dataroomtype;
  private _databedtype;
  private _databuilding;
  private _datawing;
  private date: Date;
  private id: number;
  private mode: string;
  propCode: string;
  propRoomType: string;
  propBedType: string;
  propBuilding: string;
  propWing: string;
  propNorooms: string;

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private roomtypePropertyService: RoomtypePropertyService,
    private propertyService: PropertyService,
    private mstroomtypeService: MstroomtypeService,
    private mstbedtypeService: MstbedtypeService,
    private mstbuildingService: MstbuildingService,
    private mstwingService: MstwingService,
  ) {
    this.date = new Date;
    this.id = 0;
    this.mode = 'ADD';
    this.propCode = '';
    this.propRoomType = '';
    this.propBedType = '';
    this.propBuilding = '';
    this.propWing = '';
    this.propNorooms = '';
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

  getDataByID(id) {
    this.loading = true;
    this.roomtypePropertyService.getPropRoomTypeByID(id).subscribe(
      _propRoomType => {
        this.propCode = _propRoomType[0].code_property;
        this.propRoomType = _propRoomType[0].code_roomtype;
        this.propBedType = _propRoomType[0].code_bedtype;
        this.propBuilding = _propRoomType[0].code_building;
        this.propWing = _propRoomType[0].code_wing;
        this.propNorooms = _propRoomType[0].no_rooms;
        this.loading = false;
      }, error => {
        this.loading = false;
        console.log(error);
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

    this.mstroomtypeService.getData().subscribe(
      data => {
        this._dataroomtype = data;
      },
      err => {
        console.log(err);
      });

    this.mstbedtypeService.getData().subscribe(
      data => {
        this._databedtype = data;
      },
      err => {
        console.log(err);
      });

    this.mstbuildingService.getData().subscribe(
      data => {
        this._databuilding = data;
      },
      err => {
        console.log(err);
      });

    this.mstwingService.getData().subscribe(
      data => {
        this._datawing = data;
      },
      err => {
        console.log(err);
      });
  }

  btnSave() {

    const propRoomType = {
      propCode: this.propCode,
      propRoomType: this.propRoomType,
      propBedType: this.propBedType,
      propBuilding: this.propBuilding,
      propWing: this.propWing,
      propNorooms: this.propNorooms,
    };
    const property: Array<any> = [];

    if ((this.propCode !== '') && (this.propRoomType !== '') && (this.propBedType !== '') && (this.propBuilding !== '') && (this.propWing !== '') && (this.propNorooms !== '')) {
      this.loading = true;
      if (this.mode === 'EDIT') {
        this.roomtypePropertyService.updateData(this.id, propRoomType).subscribe(
          data => {
            this.loading = false;
            this.router.navigate(['roomtype-property-link-list']);
          },
          err => {
            this.loading = false;
            console.log(err);
          }
        );
      } else {
        console.log(propRoomType);
        this.roomtypePropertyService.insertData(propRoomType).subscribe(
          datas => {
            this.loading = false;
            this.router.navigate(['roomtype-property-link-list']);
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
    this.router.navigate(['roomtype-property-link-list']);
  }

}
