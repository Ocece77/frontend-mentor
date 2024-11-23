import { Component, Input, OnInit } from '@angular/core';
import { StepInfo } from '../../models/step-info';
import { StepInfoComponent } from '../../components/step-info/step-info.component';
import { StepInfoService } from '../../services/step-info.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-step-info-list',
  imports: [StepInfoComponent, RouterLink],
  templateUrl: './step-info-list.component.html',
  styleUrl: './step-info-list.component.scss'
})
export class StepInfoListComponent implements OnInit{
  @Input() stepLists! :  StepInfo[];

  constructor(private stepInfoService : StepInfoService){}/*instanciation of the service */

  ngOnInit(): void {
      this.stepLists = this.stepInfoService.getStepInfo() /*get the step list info */
    }
}
