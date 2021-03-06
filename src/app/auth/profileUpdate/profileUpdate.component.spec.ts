import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileUpdateComponent } from './profileUpdate.component';

describe('UpdateComponent', () => {
  let component: ProfileUpdateComponent;
  let fixture: ComponentFixture<ProfileUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
