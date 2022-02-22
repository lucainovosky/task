import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeAreaComponent } from './employe-area.component';

describe('EmployeAreaComponent', () => {
  let component: EmployeAreaComponent;
  let fixture: ComponentFixture<EmployeAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
