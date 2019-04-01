import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MangerEditComponent } from './manger-edit.component';

describe('MangerEditComponent', () => {
  let component: MangerEditComponent;
  let fixture: ComponentFixture<MangerEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MangerEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MangerEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
