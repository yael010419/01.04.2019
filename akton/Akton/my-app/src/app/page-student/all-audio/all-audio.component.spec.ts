import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllAudioComponent } from './all-audio.component';

describe('AllAudioComponent', () => {
  let component: AllAudioComponent;
  let fixture: ComponentFixture<AllAudioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllAudioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllAudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
