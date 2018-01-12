import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReservationComponent } from './reservation/reservation.component';
import { Reservation2Component } from './reservation2/reservation2.component';
import { IndividualComponent } from './individual/individual.component';
import { ModalwizardComponent } from './modalwizard/modalwizard.component';
import { Test1Component } from './test1/test1.component';
// import { IndividualComponent } from './individual/individual.component';

/* -----Config----- */
import { MenuComponent } from './config/menu/menu.component';
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
import { MstRoomZoneComponent } from './config/mst-room-zone/mst-room-zone.component';
import { MstRoomZoneListComponent } from './config/mst-room-zone-list/mst-room-zone-list.component';
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
import { MstExposureComponent } from './config/mst-exposure/mst-exposure.component';
import { MstExposureListComponent } from './config/mst-exposure-list/mst-exposure-list.component';
import { MstRoomFeaturesComponent } from './config/mst-room-features/mst-room-features.component';
import { MstRoomFeaturesListComponent } from './config/mst-room-features-list/mst-room-features-list.component';

import { LoginComponent } from './config/login/login.component';
import { LoginService } from './config/services/login.service';

const routes: Routes = [
  {
    path: '', component: MenuComponent, canActivate: [LoginService],
    children: [
      { path: 'property', component: PropertyComponent },
      { path: 'property/:id', component: PropertyComponent },
      { path: 'property-list', component: PropertyListComponent },
      { path: 'brand', component: BrandComponent },
      { path: 'brand/:id', component: BrandComponent },
      { path: 'brand-list', component: BrandListComponent },
      { path: 'city', component: CityComponent },
      { path: 'city/:id', component: CityComponent },
      { path: 'city-list', component: CityListComponent },
      { path: 'country', component: CountryComponent },
      { path: 'country/:id', component: CountryComponent },
      { path: 'country-list', component: CountryListComponent },
      { path: 'roomtype-property-link', component: RoomtypePropertyLinkComponent },
      { path: 'roomtype-property-link/:id', component: RoomtypePropertyLinkComponent },
      { path: 'roomtype-property-link-list', component: RoomtypePropertyLinkListComponent },
      { path: 'mst-room', component: MstRoomComponent },
      { path: 'mst-room/:id', component: MstRoomComponent },
      { path: 'mst-room-list', component: MstRoomListComponent },
      { path: 'mst-room-zone', component: MstRoomZoneComponent },
      { path: 'mst-room-zone/:id', component: MstRoomZoneComponent },
      { path: 'mst-room-zone-list', component: MstRoomZoneListComponent },
      { path: 'mst-floor', component: MstFloorComponent },
      { path: 'mst-floor/:id', component: MstFloorComponent },
      { path: 'mst-floor-list', component: MstFloorListComponent },
      { path: 'mst-bed-type', component: MstBedTypeComponent },
      { path: 'mst-bed-type/:id', component: MstBedTypeComponent },
      { path: 'mst-bed-type-list', component: MstBedTypeListComponent },
      { path: 'mst-wing', component: MstWingComponent },
      { path: 'mst-wing/:id', component: MstWingComponent },
      { path: 'mst-wing-list', component: MstWingListComponent },
      { path: 'mst-building', component: MstBuildingComponent },
      { path: 'mst-building/:id', component: MstBuildingComponent },
      { path: 'mst-building-list', component: MstBuildingListComponent },
      { path: 'mst-room-type', component: MstRoomTypeComponent },
      { path: 'mst-room-type/:id', component: MstRoomTypeComponent },
      { path: 'mst-room-type-list', component: MstRoomTypeListComponent },
      { path: 'mst-room-class', component: MstRoomClassComponent },
      { path: 'mst-room-class/:id', component: MstRoomClassComponent },
      { path: 'mst-room-class-list', component: MstRoomClassListComponent },
      { path: 'mst-room-type-group', component: MstRoomTypeGroupComponent },
      { path: 'mst-room-type-group/:id', component: MstRoomTypeGroupComponent },
      { path: 'mst-room-type-group-list', component: MstRoomTypeGroupListComponent },
      { path: 'mst-exposure', component: MstExposureComponent },
      { path: 'mst-exposure/:id', component: MstExposureComponent },
      { path: 'mst-exposure-list', component: MstExposureListComponent },
      { path: 'mst-room-features', component: MstRoomFeaturesComponent },
      { path: 'mst-room-features/:id', component: MstRoomFeaturesComponent },
      { path: 'mst-room-features-list', component: MstRoomFeaturesListComponent },
    ]
  },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
