import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAudioComponent } from './user-audio.component';

describe('UserAudioComponent', () => {
  let component: UserAudioComponent;
  let fixture: ComponentFixture<UserAudioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserAudioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
