import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectscardsComponent } from './projectscards.component';

describe('ProjectscardsComponent', () => {
  let component: ProjectscardsComponent;
  let fixture: ComponentFixture<ProjectscardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectscardsComponent]
    });
    fixture = TestBed.createComponent(ProjectscardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
