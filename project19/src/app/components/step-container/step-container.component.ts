import { Component, Input, OnInit } from '@angular/core';
import { StepInfoListComponent } from '../../lists/step-info-list/step-info-list.component';

@Component({
  selector: 'app-step-container',
  imports: [StepInfoListComponent],
  templateUrl: './step-container.component.html',
  styleUrl: './step-container.component.scss'
})
export class StepContainerComponent implements OnInit{
ngOnInit(): void {
    
}

}
