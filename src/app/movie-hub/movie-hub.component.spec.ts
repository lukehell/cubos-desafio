import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieHubComponent } from './movie-hub.component';

describe('MovieHubComponent', () => {
  let component: MovieHubComponent;
  let fixture: ComponentFixture<MovieHubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieHubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieHubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
