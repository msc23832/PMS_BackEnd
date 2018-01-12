import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MstRoomTypeGroupComponent } from './mst-room-type-group.component';

describe('MstRoomTypeGroupComponent', () => {
  let component: MstRoomTypeGroupComponent;
  let fixture: ComponentFixture<MstRoomTypeGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MstRoomTypeGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MstRoomTypeGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
