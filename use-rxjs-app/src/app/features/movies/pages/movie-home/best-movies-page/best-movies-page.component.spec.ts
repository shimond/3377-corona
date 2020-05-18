import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BestMoviesPageComponent } from './best-movies-page.component';

describe('BestMoviesPageComponent', () => {
  let component: BestMoviesPageComponent;
  let fixture: ComponentFixture<BestMoviesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BestMoviesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BestMoviesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
