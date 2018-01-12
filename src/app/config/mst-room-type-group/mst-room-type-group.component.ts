import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MstroomtypegroupService } from '../services/mstroomtypegroup.service';

@Component({
  selector: 'app-mst-room-type-group',
  templateUrl: './mst-room-type-group.component.html',
  styleUrls: ['./mst-room-type-group.component.css'],
  providers: [MstroomtypegroupService]
})
export class MstRoomTypeGroupComponent implements OnInit {

  public loading = false;
  private date: Date;
  private id: number;
  private mode: string;
  roomtypegroupCode: string;
  roomtypegroupName: string;
  roomtypegroupDesc: string;
  active: boolean;

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private mstroomtypegroupService: MstroomtypegroupService
  ) {
    this.date = new Date;
    this.id = 0;
    this.mode = 'ADD';
    this.roomtypegroupCode = '';
    this.roomtypegroupName = '';
    this.roomtypegroupDesc = '';
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
    this.mstroomtypegroupService.getRoomTypeGroupByID(id).subscribe(
      _roomtypegroup => {
        this.roomtypegroupCode = _roomtypegroup[0].code_roomtypegroup;
        this.roomtypegroupName = _roomtypegroup[0].name_roomtypegroup;
        this.roomtypegroupDesc = _roomtypegroup[0].desc_roomtypegroup;
        this.active = _roomtypegroup[0].active;
        this.loading = false;
        console.log(_roomtypegroup);
      }, error => {
        this.loading = false;
        console.log(error);
      });
  }

  btnSave() {
    const roomtypegroup = {
      roomtypegroupCode: this.roomtypegroupCode,
      roomtypegroupName: this.roomtypegroupName,
      roomtypegroupDesc: this.roomtypegroupDesc,
      active: this.active
    };

    // console.log(brand);
    if ((this.roomtypegroupCode !== '') && (this.roomtypegroupName !== '')) {
      this.loading = true;
      if (this.mode === 'EDIT') {
        this.mstroomtypegroupService.updateData(this.id, roomtypegroup).subscribe(
          data => {
            this.loading = false;
            this.router.navigate(['mst-room-type-group-list']);
          },
          err => {
            this.loading = false;
            console.log(err);
          }
        );
      } else {
        console.log(roomtypegroup);
        this.mstroomtypegroupService.insertData(roomtypegroup).subscribe(
          datas => {
            this.loading = false;
            this.router.navigate(['mst-room-type-group-list']);
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
    this.router.navigate(['mst-room-type-group-list']);
  }


}
