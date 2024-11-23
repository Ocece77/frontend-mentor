import { Component, Input, OnInit } from '@angular/core';
import { StepInfo } from '../../models/step-info';
import { StepInfoService } from '../../services/step-info.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-step-info',
  imports: [NgClass],
  templateUrl: './step-info.component.html',
  styleUrl: './step-info.component.scss'
})
export class StepInfoComponent implements OnInit {
  @Input() stepInfo! :  StepInfo;/* step's description for the side menu */

  constructor(private stepInfoService : StepInfoService){}

  ngOnInit(): void {

    if (!this.stepInfo){ /* put the default step info if this doesn't exist */
      this.stepInfo = new StepInfo()
    }
  }
  onClick(){
    this.stepInfoService.findStepById(this.stepInfo.id)
  }

}
