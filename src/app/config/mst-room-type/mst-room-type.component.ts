import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MstroomtypeService } from '../services/mstroomtype.service';
import { MstroomclassService } from '../services/mstroomclass.service';
import { MstroomtypegroupService } from '../services/mstroomtypegroup.service';

@Component({
  selector: 'app-mst-room-type',
  templateUrl: './mst-room-type.component.html',
  styleUrls: ['./mst-room-type.component.css'],
  providers: [MstroomtypeService, MstroomclassService, MstroomtypegroupService]
})
export class MstRoomTypeComponent implements OnInit {

  public loading = false;

  private _dataroomclass;
  private _dataroomtypegroup;

  private date: Date;
  private id: number;
  private mode: string;

  roomTypeCode: string;
  roomTypeName: string;
  roomTypeSeq: string;
  roomTypeDesc: string;
  roomTypeClass: string;
  roomTypeGroup: string;
  def_no_guest: number;
  def_occ: number;
  def_min_adult: number;
  def_max_adult: number;
  def_min_child: number;
  def_max_child: number;
  def_bed_addable: number;
  def_bedtype: number;
  max_no_bed: number;

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private mstroomtypeService: MstroomtypeService,
    private mstroomclassService: MstroomclassService,
    private mstroomtypegroupService: MstroomtypegroupService,
  ) {
    this.date = new Date;
    this.id = 0;
    this.mode = 'ADD';
    this.roomTypeCode = '';
    this.roomTypeName = '';
    this.roomTypeSeq = '';
    this.roomTypeDesc = '';
    this.roomTypeClass = '';
    this.roomTypeGroup = '';
    this.def_no_guest = 0;
    this.def_occ = 0;
    this.def_min_adult = 0;
    this.def_max_adult = 0;
    this.def_min_child = 0;
    this.def_max_child = 0;
    this.def_bed_addable = 0;
    this.def_bedtype = 0;
    this.max_no_bed = 0;
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

    this.mstroomclassService.getData().subscribe(
      data => {
        this._dataroomclass = data;
      },
      err => {
        console.log(err);
      });

    this.mstroomtypegroupService.getData().subscribe(
      data => {
        this._dataroomtypegroup = data;
      },
      err => {
        console.log(err);
      });
  }

  getDataByID(id) {
    this.loading = true;
    this.mstroomtypeService.getMstRoomTypeByID(id).subscribe(
      _roomType => {
        console.log(_roomType);
        this.roomTypeCode = _roomType[0].code_roomtype;
        this.roomTypeName = _roomType[0].name_roomtype;
        this.roomTypeSeq = _roomType[0].seq_roomtype;
        this.roomTypeDesc = _roomType[0].desc_roomtype;
        this.roomTypeClass = _roomType[0].code_roomclass;
        this.roomTypeGroup = _roomType[0].code_roomtypegroup;
        this.def_no_guest = _roomType[0].def_no_guest;
        this.def_occ = _roomType[0].def_occ;
        this.def_min_adult = _roomType[0].def_min_adult;
        this.def_max_adult = _roomType[0].def_max_adult;
        this.def_min_child = _roomType[0].def_min_child;
        this.def_max_child = _roomType[0].def_max_child;
        this.def_bed_addable = _roomType[0].def_bed_addable;
        this.def_bedtype = _roomType[0].def_bedtype;
        this.max_no_bed = _roomType[0].max_no_bed;
        this.loading = false;
      }, error => {
        this.loading = false;
        console.log(error);
      });
  }

  btnSave() {


    const RoomType = {
      roomTypeCode: this.roomTypeCode,
      roomTypeName: this.roomTypeName,
      roomTypeSeq: this.roomTypeSeq,
      roomTypeDesc: this.roomTypeDesc,
      roomTypeClass: this.roomTypeClass,
      roomTypeGroup: this.roomTypeGroup,
      def_no_guest: this.def_no_guest,
      def_occ: this.def_occ,
      def_min_adult: this.def_min_adult,
      def_max_adult: this.def_max_adult,
      def_min_child: this.def_min_child,
      def_max_child: this.def_max_child,
      def_bed_addable: this.def_bed_addable,
      def_bedtype: this.def_bedtype,
      max_no_bed: this.max_no_bed,
    };

    if ((this.roomTypeCode !== '') && (this.roomTypeName !== '') && (this.roomTypeSeq !== '') && (this.roomTypeClass !== '') && (this.roomTypeGroup !== '')) {
      this.loading = true;
      if (this.mode === 'EDIT') {
        this.mstroomtypeService.updateData(this.id, RoomType).subscribe(
          data => {
            this.loading = false;
            this.router.navigate(['mst-room-type-list']);
          },
          err => {
            this.loading = false;
            console.log(err);
          }
        );
      } else {
        console.log(RoomType);
        this.mstroomtypeService.insertData(RoomType).subscribe(
          datas => {
            this.loading = false;
            this.router.navigate(['mst-room-type-list']);
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
    this.router.navigate(['mst-room-type-list']);
  }

}
