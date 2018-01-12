import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomtypePropertyLinkListComponent } from './roomtype-property-link-list.component';

describe('RoomtypePropertyLinkListComponent', () => {
  let component: RoomtypePropertyLinkListComponent;
  let fixture: ComponentFixture<RoomtypePropertyLinkListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomtypePropertyLinkListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomtypePropertyLinkListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
