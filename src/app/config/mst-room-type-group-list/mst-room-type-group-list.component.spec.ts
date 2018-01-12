import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MstRoomTypeGroupListComponent } from './mst-room-type-group-list.component';

describe('MstRoomTypeGroupListComponent', () => {
  let component: MstRoomTypeGroupListComponent;
  let fixture: ComponentFixture<MstRoomTypeGroupListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MstRoomTypeGroupListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MstRoomTypeGroupListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
