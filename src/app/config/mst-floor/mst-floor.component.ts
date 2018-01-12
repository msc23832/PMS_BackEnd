import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MstfloorService } from '../services/mstfloor.service';

@Component({
  selector: 'app-mst-floor',
  templateUrl: './mst-floor.component.html',
  styleUrls: ['./mst-floor.component.css'],
  providers: [MstfloorService]
})
export class MstFloorComponent implements OnInit {

  public loading = false;
  private date: Date;
  private id: number;
  private mode: string;
  floorCode: string;
  floorName: string;
  floorDesc: string;
  floorProperty: string;
  active: boolean;

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private mstfloorService: MstfloorService
  ) {
    this.date = new Date;
    this.id = 0;
    this.mode = 'ADD';
    this.floorCode = '';
    this.floorName = '';
    this.floorDesc = '';
    this.floorProperty = '';
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
    this.mstfloorService.getFloorByID(id).subscribe(
      _floor => {
        this.floorCode = _floor[0].code_floor;
        this.floorName = _floor[0].name_floor;
        this.floorDesc = _floor[0].desc_floor;
        this.floorProperty = _floor[0].code_property;
        this.active = _floor[0].active;
        this.loading = false;
        console.log(_floor);
      }, error => {
        this.loading = false;
        console.log(error);
      });
  }

  btnSave() {
    const floor = {
      floorCode: this.floorCode,
      floorName: this.floorName,
      floorDesc: this.floorDesc,
      floorProperty: this.floorProperty,
      active: this.active
    };

    // console.log(brand);
    if ((this.floorCode !== '') && (this.floorName !== '') && (this.floorProperty !== '')) {
      this.loading = true;
      if (this.mode === 'EDIT') {
        this.mstfloorService.updateData(this.id, floor).subscribe(
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
        console.log(floor);
        this.mstfloorService.insertData(floor).subscribe(
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
    this.router.navigate(['mst-floor-list']);
  }

}
