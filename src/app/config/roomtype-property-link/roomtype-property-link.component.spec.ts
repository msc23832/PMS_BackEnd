import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomtypePropertyLinkComponent } from './roomtype-property-link.component';

describe('RoomtypePropertyLinkComponent', () => {
  let component: RoomtypePropertyLinkComponent;
  let fixture: ComponentFixture<RoomtypePropertyLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomtypePropertyLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomtypePropertyLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
