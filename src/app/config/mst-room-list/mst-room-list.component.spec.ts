import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MstRoomListComponent } from './mst-room-list.component';

describe('MstRoomListComponent', () => {
  let component: MstRoomListComponent;
  let fixture: ComponentFixture<MstRoomListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MstRoomListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MstRoomListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
