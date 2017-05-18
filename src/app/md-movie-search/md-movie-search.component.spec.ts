import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MdMovieSearchComponent } from './md-movie-search.component';

describe('MdMovieSearchComponent', () => {
  let component: MdMovieSearchComponent;
  let fixture: ComponentFixture<MdMovieSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MdMovieSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MdMovieSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
