import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondtimeComponent } from './secondtime.component';

describe('SecondtimeComponent', () => {
  let component: SecondtimeComponent;
  let fixture: ComponentFixture<SecondtimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondtimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondtimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
