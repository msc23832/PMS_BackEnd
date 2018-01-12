import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MstRoomTypeListComponent } from './mst-room-type-list.component';

describe('MstRoomTypeListComponent', () => {
  let component: MstRoomTypeListComponent;
  let fixture: ComponentFixture<MstRoomTypeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MstRoomTypeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MstRoomTypeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
