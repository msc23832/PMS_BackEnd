import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ReservationComponent } from './reservation/reservation.component';
import { Test1Component } from './test1/test1.component';
import { IndividualComponent } from './individual/individual.component';
import { ModalwizardComponent } from './modalwizard/modalwizard.component';
import { Reservation2Component } from './reservation2/reservation2.component';
import { LoadingModule } from 'ngx-loading';


import { PropertyComponent } from './config/property/property.component';
import { PropertyListComponent } from './config/property-list/property-list.component';
import { BrandComponent } from './config/brand/brand.component';
import { BrandListComponent } from './config/brand-list/brand-list.component';
import { CountryComponent } from './config/country/country.component';
import { CountryListComponent } from './config/country-list/country-list.component';
import { CityComponent } from './config/city/city.component';
import { CityListComponent } from './config/city-list/city-list.component';
import { RoomtypePropertyLinkComponent } from './config/roomtype-property-link/roomtype-property-link.component';
import { RoomtypePropertyLinkListComponent } from './config/roomtype-property-link-list/roomtype-property-link-list.component';
import { MstRoomComponent } from './config/mst-room/mst-room.component';
import { MstRoomListComponent } from './config/mst-room-list/mst-room-list.component';
import { MstFloorComponent } from './config/mst-floor/mst-floor.component';
import { MstFloorListComponent } from './config/mst-floor-list/mst-floor-list.component';
import { MstBedTypeComponent } from './config/mst-bed-type/mst-bed-type.component';
import { MstBedTypeListComponent } from './config/mst-bed-type-list/mst-bed-type-list.component';
import { MstWingComponent } from './config/mst-wing/mst-wing.component';
import { MstWingListComponent } from './config/mst-wing-list/mst-wing-list.component';
import { MstBuildingComponent } from './config/mst-building/mst-building.component';
import { MstBuildingListComponent } from './config/mst-building-list/mst-building-list.component';
import { MstRoomTypeComponent } from './config/mst-room-type/mst-room-type.component';
import { MstRoomTypeListComponent } from './config/mst-room-type-list/mst-room-type-list.component';
import { MstRoomClassComponent } from './config/mst-room-class/mst-room-class.component';
import { MstRoomClassListComponent } from './config/mst-room-class-list/mst-room-class-list.component';
import { MstRoomTypeGroupComponent } from './config/mst-room-type-group/mst-room-type-group.component';
import { MstRoomTypeGroupListComponent } from './config/mst-room-type-group-list/mst-room-type-group-list.component';
import { MenuComponent } from './config/menu/menu.component';
import { HttpModule } from '@angular/http';
import { LoginComponent } from './config/login/login.component';
import { LoginService } from './config/services/login.service';
import { MstRoomZoneComponent } from './config/mst-room-zone/mst-room-zone.component';
import { MstRoomZoneListComponent } from './config/mst-room-zone-list/mst-room-zone-list.component';
import { MstExposureComponent } from './config/mst-exposure/mst-exposure.component';
import { MstExposureListComponent } from './config/mst-exposure-list/mst-exposure-list.component';
import { MstRoomFeaturesComponent } from './config/mst-room-features/mst-room-features.component';
import { MstRoomFeaturesListComponent } from './config/mst-room-features-list/mst-room-features-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ReservationComponent,
    Test1Component,
    Reservation2Component,
    IndividualComponent,
    ModalwizardComponent,
    PropertyComponent,
    PropertyListComponent,
    BrandComponent,
    BrandListComponent,
    CountryComponent,
    CountryListComponent,
    CityComponent,
    CityListComponent,
    RoomtypePropertyLinkComponent,
    RoomtypePropertyLinkListComponent,
    MstRoomComponent,
    MstRoomListComponent,
    MstFloorComponent,
    MstFloorListComponent,
    MstBedTypeComponent,
    MstBedTypeListComponent,
    MstWingComponent,
    MstWingListComponent,
    MstBuildingComponent,
    MstBuildingListComponent,
    MstRoomTypeComponent,
    MstRoomTypeListComponent,
    MstRoomClassComponent,
    MstRoomClassListComponent,
    MstRoomTypeGroupComponent,
    MstRoomTypeGroupListComponent,
    MenuComponent,
    LoginComponent,
    MstRoomZoneComponent,
    MstRoomZoneListComponent,
    MstExposureComponent,
    MstExposureListComponent,
    MstRoomFeaturesComponent,
    MstRoomFeaturesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    LoadingModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
