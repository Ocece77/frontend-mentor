import { NgClass, } from '@angular/common';
import { Component, DoCheck, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { StepInfoService } from '../../services/step-info.service';

@Component({
  selector: 'app-btn-bar',
  imports: [NgClass,
    RouterLink
  ],
  templateUrl: './btn-bar.component.html',
  styleUrl: './btn-bar.component.scss'
})
export class BtnBarComponent implements  OnInit , DoCheck{
   currStep! : number ;

   public stepNameList : string[]=[
   "step-one",
   "step-two",
   "step-three", 
   "step-four",
   "step-confirmation"
   ];
 
  constructor(private stepinfoservice : StepInfoService){}

    ngDoCheck(){
      const currPosition = this.stepinfoservice.getStepInfo().find(step => step.currentStep)?.position
      if (currPosition !== undefined) {
        this.currStep = currPosition;
      }   
     }
    
  ngOnInit() {
  }

  

}
