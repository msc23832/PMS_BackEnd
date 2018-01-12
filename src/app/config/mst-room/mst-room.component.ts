import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PropertyService } from '../services/property.service';
import { MstfloorService } from '../services/mstfloor.service';
import { MstroomService } from '../services/mstroom.service';
import { MstroomtypeService } from '../services/mstroomtype.service';
import { MstfeatureService } from '../services/mstfeature.service';
import { MstzoneService } from '../services/mstzone.service';
import { MstwingService } from '../services/mstwing.service';
import { MstexposureService } from '../services/mstexposure.service';
import { MstbuildingService } from '../services/mstbuilding.service';

@Component({
  selector: 'app-mst-room',
  templateUrl: './mst-room.component.html',
  styleUrls: ['./mst-room.component.css'],
  providers: [PropertyService,
    MstfloorService,
    MstroomService,
    MstroomtypeService,
    MstfeatureService,
    MstzoneService,
    MstwingService,
    MstexposureService,
    MstbuildingService]
})
export class MstRoomComponent implements OnInit {

  public loading = false;

  private _dataproperty;
  private _datafloor;
  private _dataroomtype;
  private _datafeature;
  private _datazone;
  private _datawing;
  private _dataexposure;
  private _databuilding;

  private date: Date;
  private id: number;
  private mode: string;

  roomCode: string;
  roomName: string;
  roomProp: string;
  roomFloor: string;
  roomRoomType: string;
  roomDesc: string;
  roomFeature: string;
  roomZone: string;
  roomWing: string;
  roomExposure: string;
  roomBuilding: string;
  roomImg: string;
  active: boolean;

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private propertyService: PropertyService,
    private mstFloorService: MstfloorService,
    private mstRoomService: MstroomService,
    private mstRoomtypeService: MstroomtypeService,
    private mstFeatureService: MstfeatureService,
    private mstZoneService: MstzoneService,
    private mstWingService: MstwingService,
    private mstExposureService: MstexposureService,
    private mstBuildingService: MstbuildingService
  ) {
    this.date = new Date;
    this.id = 0;
    this.mode = 'ADD';
    this.roomCode = '';
    this.roomName = '';
    this.roomProp = '';
    this.roomFloor = '';
    this.roomRoomType = '';
    this.roomDesc = '';
    this.roomFeature = '';
    this.roomZone = '';
    this.roomWing = '';
    this.roomExposure = '';
    this.roomBuilding = '';
    this.roomImg = null;
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

  getDataByID(id) {
    this.loading = true;
    this.mstRoomService.getMstRoomByID(id).subscribe(
      _room => {
        this.roomCode = _room[0].code_room;
        this.roomName = _room[0].name_room;
        this.roomProp = _room[0].code_property;
        this.roomFloor = _room[0].code_floor;
        this.roomRoomType = _room[0].code_roomtype;
        this.roomDesc = _room[0].desc_room;
        this.roomFeature = _room[0].code_roomfeature;
        this.roomZone = _room[0].code_roomzone;
        this.roomWing = _room[0].code_wing;
        this.roomExposure = _room[0].code_exposure;
        this.roomBuilding = _room[0].code_building;
        this.roomImg = _room[0].imgcatalog;
        this.active = _room[0].active;
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

    this.mstFloorService.getData().subscribe(
      data => {
        this._datafloor = data;
      },
      err => {
        console.log(err);
      });

    this.mstRoomtypeService.getData().subscribe(
      data => {
        this._dataroomtype = data;
      },
      err => {
        console.log(err);
      });

    this.mstFeatureService.getData().subscribe(
      data => {
        this._datafeature = data;
      },
      err => {
        console.log(err);
      });

    this.mstZoneService.getData().subscribe(
      data => {
        this._datazone = data;
      },
      err => {
        console.log(err);
      });

    this.mstWingService.getData().subscribe(
      data => {
        this._datawing = data;
      },
      err => {
        console.log(err);
      });

    this.mstExposureService.getData().subscribe(
      data => {
        this._dataexposure = data;
      },
      err => {
        console.log(err);
      });

    this.mstBuildingService.getData().subscribe(
      data => {
        this._databuilding = data;
      },
      err => {
        console.log(err);
      });
  }

  btnSave() {

    const Room = {
      roomCode: this.roomCode,
      roomName: this.roomName,
      roomProp: this.roomProp,
      roomFloor: this.roomFloor,
      roomRoomType: this.roomRoomType,
      roomDesc: this.roomDesc,
      roomFeature: this.roomFeature,
      roomZone: this.roomZone,
      roomWing: this.roomWing,
      roomExposure: this.roomExposure,
      roomBuilding: this.roomBuilding,
      roomImg: this.roomImg,
      active: this.active
    };

    if ((this.roomCode !== '') && (this.roomName !== '') && (this.roomProp !== '') && (this.roomFloor !== '') && (this.roomRoomType !== '') && (this.roomFeature !== '') && (this.roomZone !== '') && (this.roomWing !== '') && (this.roomExposure !== '') && (this.roomBuilding !== '')) {
      this.loading = true;
      if (this.mode === 'EDIT') {
        this.mstRoomService.updateData(this.id, Room).subscribe(
          data => {
            this.loading = false;
            this.router.navigate(['mst-room-list']);
          },
          err => {
            this.loading = false;
            console.log(err);
          }
        );
      } else {
        console.log(Room);
        this.mstRoomService.insertData(Room).subscribe(
          datas => {
            this.loading = false;
            this.router.navigate(['mst-room-list']);
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
    this.router.navigate(['mst-room-list']);
  }

}
