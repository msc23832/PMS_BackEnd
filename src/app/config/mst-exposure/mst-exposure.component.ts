import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MstexposureService } from '../services/mstexposure.service';

@Component({
  selector: 'app-mst-exposure',
  templateUrl: './mst-exposure.component.html',
  styleUrls: ['./mst-exposure.component.css'],
  providers: [MstexposureService]
})
export class MstExposureComponent implements OnInit {

  public loading = false;
  private date: Date;
  private id: number;
  private mode: string;
  exposureCode: string;
  exposureName: string;

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private mstexposureService: MstexposureService
  ) {
    this.date = new Date;
    this.id = 0;
    this.mode = 'ADD';
    this.exposureCode = '';
    this.exposureName = '';
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
    console.log('Test');
    this.loading = true;
    this.mstexposureService.getExposureByID(id).subscribe(
      _exposure => {
        this.exposureCode = _exposure[0].code_exposure;
        this.exposureName = _exposure[0].name_exposure;
        this.loading = false;
        console.log(_exposure);
      }, error => {
        this.loading = false;
        console.log(error);
      });
  }

  btnSave() {
    const exposure = {
      exposureCode: this.exposureCode,
      exposureName: this.exposureName
    };

    // console.log(brand);
    if ((this.exposureCode !== '') && (this.exposureName !== '')) {
      this.loading = true;
      if (this.mode === 'EDIT') {
        this.mstexposureService.updateData(this.id, exposure).subscribe(
          data => {
            this.loading = false;
            this.router.navigate(['mst-exposure-list']);
          },
          err => {
            this.loading = false;
            console.log(err);
          }
        );
      } else {
        console.log(exposure);
        this.mstexposureService.insertData(exposure).subscribe(
          datas => {
            this.loading = false;
            this.router.navigate(['mst-exposure-list']);
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
    this.router.navigate(['mst-exposure-list']);
  }

}
