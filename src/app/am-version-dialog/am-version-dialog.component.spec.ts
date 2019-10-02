import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmVersionDialogComponent } from './am-version-dialog.component';

describe('AmVersionDialogComponent', () => {
  let component: AmVersionDialogComponent;
  let fixture: ComponentFixture<AmVersionDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmVersionDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmVersionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
