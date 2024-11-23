import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepInfoListComponent } from './step-info-list.component';

describe('StepInfoListComponent', () => {
  let component: StepInfoListComponent;
  let fixture: ComponentFixture<StepInfoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepInfoListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepInfoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
