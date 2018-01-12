import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MstroomzoneService } from '../services/mstroomzone.service';

@Component({
  selector: 'app-mst-room-zone',
  templateUrl: './mst-room-zone.component.html',
  styleUrls: ['./mst-room-zone.component.css'],
  providers: [MstroomzoneService]
})
export class MstRoomZoneComponent implements OnInit {

  public loading = false;
  private date: Date;
  private id: number;
  private mode: string;
  roomzoneCode: string;
  roomzoneName: string;

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private mstroomzoneService: MstroomzoneService
  ) {
    this.date = new Date;
    this.id = 0;
    this.mode = 'ADD';
    this.roomzoneCode = '';
    this.roomzoneName = '';
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
    this.mstroomzoneService.getRoomZoneByID(id).subscribe(
      _roomzone => {
        this.roomzoneCode = _roomzone[0].code_roomzone;
        this.roomzoneName = _roomzone[0].name_roomzone;
        this.loading = false;
        console.log(_roomzone);
      }, error => {
        this.loading = false;
        console.log(error);
      });
  }

  btnSave() {
    const roomzone = {
      roomzoneCode: this.roomzoneCode,
      roomzoneName: this.roomzoneName
    };

    // console.log(brand);
    if ((this.roomzoneCode !== '') && (this.roomzoneName !== '')) {
      this.loading = true;
      if (this.mode === 'EDIT') {
        this.mstroomzoneService.updateData(this.id, roomzone).subscribe(
          data => {
            this.loading = false;
            this.router.navigate(['mst-room-zone-list']);
          },
          err => {
            this.loading = false;
            console.log(err);
          }
        );
      } else {
        console.log(roomzone);
        this.mstroomzoneService.insertData(roomzone).subscribe(
          datas => {
            this.loading = false;
            this.router.navigate(['mst-room-zone-list']);
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
    this.router.navigate(['mst-room-zone-list']);
  }

}
