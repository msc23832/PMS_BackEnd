import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MstRoomFeaturesListComponent } from './mst-room-features-list.component';

describe('MstRoomFeaturesListComponent', () => {
  let component: MstRoomFeaturesListComponent;
  let fixture: ComponentFixture<MstRoomFeaturesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MstRoomFeaturesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MstRoomFeaturesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
