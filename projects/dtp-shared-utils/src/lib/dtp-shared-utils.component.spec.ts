import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DtpSharedUtilsComponent } from './dtp-shared-utils.component';

describe('DtpSharedUtilsComponent', () => {
  let component: DtpSharedUtilsComponent;
  let fixture: ComponentFixture<DtpSharedUtilsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DtpSharedUtilsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DtpSharedUtilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
