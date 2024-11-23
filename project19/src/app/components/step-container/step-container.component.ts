import { Component, Input, OnInit } from '@angular/core';
import { StepInfoComponent } from '../step-info/step-info.component';
import { StepInfo } from '../../models/step-info';

@Component({
  selector: 'app-step-container',
  imports: [StepInfoComponent],
  templateUrl: './step-container.component.html',
  styleUrl: './step-container.component.scss'
})
export class StepContainerComponent implements OnInit{
  @Input() stepLists! :  StepInfo[];
  ngOnInit(): void {
      this.stepLists =  [
        new StepInfo(1, 'your info'),
        new StepInfo(2, 'select plan'),
        new StepInfo(3, 'add-ons'),
        new StepInfo(4, 'summary'),

      ]
  }

}
