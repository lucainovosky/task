import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskEmployeComponent } from './task-employe.component';

describe('TaskEmployeComponent', () => {
  let component: TaskEmployeComponent;
  let fixture: ComponentFixture<TaskEmployeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskEmployeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskEmployeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
