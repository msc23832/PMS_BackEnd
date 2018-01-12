import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MstRoomTypeComponent } from './mst-room-type.component';

describe('MstRoomTypeComponent', () => {
  let component: MstRoomTypeComponent;
  let fixture: ComponentFixture<MstRoomTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MstRoomTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MstRoomTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
