import { Component, Input, OnInit } from '@angular/core';
import { StepInfo } from '../../models/step-info';

@Component({
  selector: 'app-step-info',
  imports: [],
  templateUrl: './step-info.component.html',
  styleUrl: './step-info.component.scss'
})
export class StepInfoComponent implements OnInit {
  @Input() stepInfo! :  StepInfo;/* step's description for the side menu */

  ngOnInit(): void {

    if (!this.stepInfo){ /* put the default step info if this doesn't exist */
      this.stepInfo = new StepInfo()
    }
  }

}
