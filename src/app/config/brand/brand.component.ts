import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BrandService } from '../services/brand.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css'],
  providers: [BrandService]
})
export class BrandComponent implements OnInit {

  public loading = false;

  private _databrand;
  private date: Date;
  private id: number;
  private mode: string;
  brandCode: string;
  brandName: string;
  active: boolean;
  brandLicense: string;
  brandValidate: Date;

  constructor(private router: Router, private activeRoute: ActivatedRoute, private brandService: BrandService) {
    this.date = new Date;
    this.id = 0;
    this.mode = 'ADD';
    this.brandCode = '';
    this.brandName = '';
    this.active = false;
    this.brandLicense = '';
    // const datePipe = new DatePipe('en-US');
    // this.brandValidate = datePipe.transform(new Date, 'dd-MM-yyyy');
    this.brandValidate = new Date;
  }

  ngOnInit() {
    $.getScript('../../../assets/js/datepicker.js');

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
    this.brandService.getBrandByID(id).subscribe(
      _brand => {
        this.brandCode = _brand[0].code_brand;
        this.brandName = _brand[0].name_brand;
        this.active = _brand[0].active;
        this.brandLicense = _brand[0].brand_license;
        const formatdate = _brand[0].brand_validate.split('-');
        const formatday = formatdate[0];
        const formatmonth = formatdate[1];
        const formatyear = formatdate[2];
        this.brandValidate = new Date(formatyear + '-' + formatmonth + '-' + formatday);
        // this.brandValidate = _brand[0].brand_validate;

        this.loading = false;
        console.log(_brand);
      }, error => {
        this.loading = false;
        console.log(error);
      });
  }

  btnSave() {
    // const datevali = this.brandValidate;
    // const datevali2 = datevali.split('-');
    // // console.log(datevali2);
    // const year = datevali2[0];
    // const month = datevali2[1];
    // const day = datevali2[2];
    // this.brandValidate = year + '-' + month + '-' + day;
    // console.log(this.brandValidate);

    const brand = {
      brandCode: this.brandCode,
      brandName: this.brandName,
      active: this.active,
      brandLicense: this.brandLicense,
      brandValidate: this.brandValidate
    };

    console.log(brand);
    if ((this.brandCode !== '') && (this.brandName !== '') && (this.brandLicense !== '')) {
      this.loading = true;
      if (this.mode === 'EDIT') {
        this.brandService.updateData(this.id, brand).subscribe(
          data => {
            this.loading = false;
            this.router.navigate(['brand-list']);
          },
          err => {
            this.loading = false;
            console.log(err);
          }
        );
      } else {
        console.log(brand);
        this.brandService.insertData(brand).subscribe(
          datas => {
            this.loading = false;
            this.router.navigate(['brand-list']);
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
    this.router.navigate(['brand-list']);
  }

}
