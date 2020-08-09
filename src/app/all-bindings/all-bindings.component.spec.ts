import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllBindingsComponent } from './all-bindings.component';

describe('AllBindingsComponent', () => {
  let component: AllBindingsComponent;
  let fixture: ComponentFixture<AllBindingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllBindingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllBindingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
