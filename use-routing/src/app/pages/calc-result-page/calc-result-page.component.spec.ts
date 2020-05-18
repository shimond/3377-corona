import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcResultPageComponent } from './calc-result-page.component';

describe('CalcResultPageComponent', () => {
  let component: CalcResultPageComponent;
  let fixture: ComponentFixture<CalcResultPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalcResultPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalcResultPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
