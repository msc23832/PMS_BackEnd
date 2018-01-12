import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MstRoomFeaturesComponent } from './mst-room-features.component';

describe('MstRoomFeaturesComponent', () => {
  let component: MstRoomFeaturesComponent;
  let fixture: ComponentFixture<MstRoomFeaturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MstRoomFeaturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MstRoomFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
