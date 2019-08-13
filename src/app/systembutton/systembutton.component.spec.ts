import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystembuttonComponent } from './systembutton.component';

describe('SystembuttonComponent', () => {
  let component: SystembuttonComponent;
  let fixture: ComponentFixture<SystembuttonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystembuttonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystembuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
