import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeRestorePasswordComponent } from './change-restore-password.component';

describe('ChangeRestorePasswordComponent', () => {
  let component: ChangeRestorePasswordComponent;
  let fixture: ComponentFixture<ChangeRestorePasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeRestorePasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeRestorePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
