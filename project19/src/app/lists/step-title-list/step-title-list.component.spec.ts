import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepTitleListComponent } from './step-title-list.component';

describe('StepTitleListComponent', () => {
  let component: StepTitleListComponent;
  let fixture: ComponentFixture<StepTitleListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepTitleListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepTitleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
