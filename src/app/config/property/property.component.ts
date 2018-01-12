import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PropertyService } from '../services/property.service';
import { BrandService } from '../services/brand.service';
import { CityService } from '../services/city.service';
import { CountryService } from '../services/country.service';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css'],
  providers: [PropertyService, BrandService, CityService, CountryService]
})
export class PropertyComponent implements OnInit {

  public loading = false;

  private _databrand;
  private _datacity;
  private _datacountry;
  // private prop;
  private date: Date;
  private id: number;
  private mode: string;
  propCode: string;
  propName: string;
  propBrand: string;
  propAddress1: string;
  propAddress2: string;
  propAddress3: string;
  propActivatedkey: string;
  propCity: string;
  propCityCountry: string;
  propCountry: string;
  propPostcode: string;
  propNorooms: string;

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private propertyService: PropertyService,
    private brandService: BrandService,
    private cityService: CityService,
    private countryService: CountryService
  ) {
    this.date = new Date;
    this.id = 0;
    this.mode = 'ADD';
    this.propCode = '';
    this.propName = '';
    this.propBrand = '';
    this.propAddress1 = '';
    this.propAddress2 = '';
    this.propAddress3 = '';
    this.propActivatedkey = '';
    this.propCity = '';
    this.propCityCountry = '';
    this.propCountry = '';
    this.propPostcode = '';
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
    this.propertyService.getPropertyByID(id).subscribe(
      _prop => {
        this.propCode = _prop[0].code_property;
        this.propName = _prop[0].name_property;
        this.propBrand = _prop[0].code_brand;
        this.propAddress1 = _prop[0].address1;
        this.propAddress2 = _prop[0].address2;
        this.propAddress3 = _prop[0].address3;
        this.propActivatedkey = _prop[0].activatedkey;
        this.propCity = _prop[0].code_city;
        this.propCityCountry = _prop[0].code_citycountry;
        this.propCountry = _prop[0].code_country;
        this.propPostcode = _prop[0].postcode;
        this.propNorooms = _prop[0].no_rooms;
        this.loading = false;
      }, error => {
        this.loading = false;
        console.log(error);
      });
  }

  getDataOther() {
    this.date = new Date();
    this.brandService.getData().subscribe(
      data => {
        this._databrand = data;
      },
      err => {
        console.log(err);
      });

    this.cityService.getData().subscribe(
      data => {
        this._datacity = data;
      },
      err => {
        console.log(err);
      });

    this.countryService.getData().subscribe(
      data => {
        this._datacountry = data;
      },
      err => {
        console.log(err);
      });
  }

  btnSave() {

    const prop = {
      propCode: this.propCode,
      propName: this.propName,
      propBrand: this.propBrand,
      propAddress1: this.propAddress1,
      propAddress2: this.propAddress2,
      propAddress3: this.propAddress3,
      propActivatedkey: this.propActivatedkey,
      propCity: this.propCity,
      propCityCountry: this.propCityCountry,
      propCountry: this.propCountry,
      propPostcode: this.propPostcode,
      propNorooms: this.propNorooms
    };
    const property: Array<any> = [];

    if ((this.propCode !== '') && (this.propName !== '') && (this.propBrand !== '') && (this.propActivatedkey !== '') && (this.propCity !== '') && (this.propCityCountry !== '') && (this.propCountry !== '') && (this.propNorooms !== '')) {
      this.loading = true;
      if (this.mode === 'EDIT') {
        this.propertyService.updateData(this.id, prop).subscribe(
          data => {
            this.loading = false;
            this.router.navigate(['property-list']);
          },
          err => {
            this.loading = false;
            console.log(err);
          }
        );
      } else {
        console.log(prop);
        this.propertyService.insertData(prop).subscribe(
          datas => {
            this.loading = false;
            this.router.navigate(['property-list']);
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
    this.router.navigate(['property-list']);
  }

}
