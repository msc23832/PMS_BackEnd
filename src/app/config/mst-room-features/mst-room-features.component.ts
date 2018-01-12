import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MstroomfeaturesService } from '../services/mstroomfeatures.service';

@Component({
  selector: 'app-mst-room-features',
  templateUrl: './mst-room-features.component.html',
  styleUrls: ['./mst-room-features.component.css'],
  providers: [MstroomfeaturesService]
})
export class MstRoomFeaturesComponent implements OnInit {

  public loading = false;
  private date: Date;
  private id: number;
  private mode: string;
  roomfeatureCode: string;
  roomfeatureName: string;

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private mstroomfeatureService: MstroomfeaturesService
  ) {
    this.date = new Date;
    this.id = 0;
    this.mode = 'ADD';
    this.roomfeatureCode = '';
    this.roomfeatureName = '';
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
    this.mstroomfeatureService.getRoomFeatureByID(id).subscribe(
      _roomfeature => {
        this.roomfeatureCode = _roomfeature[0].code_roomfeature;
        this.roomfeatureName = _roomfeature[0].name_roomfeature;
        this.loading = false;
        console.log(_roomfeature);
      }, error => {
        this.loading = false;
        console.log(error);
      });
  }

  btnSave() {
    const roomfeature = {
      roomfeatureCode: this.roomfeatureCode,
      roomfeatureName: this.roomfeatureName
    };

    // console.log(brand);
    if ((this.roomfeatureCode !== '') && (this.roomfeatureName !== '')) {
      this.loading = true;
      if (this.mode === 'EDIT') {
        this.mstroomfeatureService.updateData(this.id, roomfeature).subscribe(
          data => {
            this.loading = false;
            this.router.navigate(['mst-room-feature-list']);
          },
          err => {
            this.loading = false;
            console.log(err);
          }
        );
      } else {
        console.log(roomfeature);
        this.mstroomfeatureService.insertData(roomfeature).subscribe(
          datas => {
            this.loading = false;
            this.router.navigate(['mst-room-feature-list']);
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
    this.router.navigate(['mst-room-feature-list']);
  }

}
