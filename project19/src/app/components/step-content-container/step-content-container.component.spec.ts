import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepContentContainerComponent } from './step-content-container.component';

describe('StepContentContainerComponent', () => {
  let component: StepContentContainerComponent;
  let fixture: ComponentFixture<StepContentContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepContentContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepContentContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
