import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MstroomclassService } from '../services/mstroomclass.service';

@Component({
  selector: 'app-mst-room-class',
  templateUrl: './mst-room-class.component.html',
  styleUrls: ['./mst-room-class.component.css'],
  providers: [MstroomclassService]
})
export class MstRoomClassComponent implements OnInit {

  public loading = false;
  private date: Date;
  private id: number;
  private mode: string;
  roomclassCode: string;
  roomclassName: string;

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private mstroomclassService: MstroomclassService
  ) {
    this.date = new Date;
    this.id = 0;
    this.mode = 'ADD';
    this.roomclassCode = '';
    this.roomclassName = '';
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
    this.mstroomclassService.getRoomClassByID(id).subscribe(
      _roomclass => {
        this.roomclassCode = _roomclass[0].code_roomclass;
        this.roomclassName = _roomclass[0].name_roomclass;
        this.loading = false;
        console.log(_roomclass);
      }, error => {
        this.loading = false;
        console.log(error);
      });
  }

  btnSave() {
    const roomclass = {
      roomclassCode: this.roomclassCode,
      roomclassName: this.roomclassName
    };

    // console.log(brand);
    if ((this.roomclassCode !== '') && (this.roomclassName !== '')) {
      this.loading = true;
      if (this.mode === 'EDIT') {
        this.mstroomclassService.updateData(this.id, roomclass).subscribe(
          data => {
            this.loading = false;
            this.router.navigate(['mst-room-class-list']);
          },
          err => {
            this.loading = false;
            console.log(err);
          }
        );
      } else {
        console.log(roomclass);
        this.mstroomclassService.insertData(roomclass).subscribe(
          datas => {
            this.loading = false;
            this.router.navigate(['mst-room-class-list']);
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
    this.router.navigate(['mst-room-class-list']);
  }

}
