import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmplyeDetailComponent } from './emplye-detail.component';

describe('EmplyeDetailComponent', () => {
  let component: EmplyeDetailComponent;
  let fixture: ComponentFixture<EmplyeDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmplyeDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmplyeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
