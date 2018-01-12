import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MstRoomComponent } from './mst-room.component';

describe('MstRoomComponent', () => {
  let component: MstRoomComponent;
  let fixture: ComponentFixture<MstRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MstRoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MstRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
