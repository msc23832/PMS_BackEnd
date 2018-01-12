import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MstRoomClassListComponent } from './mst-room-class-list.component';

describe('MstRoomClassListComponent', () => {
  let component: MstRoomClassListComponent;
  let fixture: ComponentFixture<MstRoomClassListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MstRoomClassListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MstRoomClassListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
