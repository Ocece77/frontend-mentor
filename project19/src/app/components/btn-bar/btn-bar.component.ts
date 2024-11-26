import { Location, NgClass, } from '@angular/common';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import {  NavigationEnd, Router, RouterLink } from '@angular/router';
import { StepInfoService } from '../../services/step-info.service';
import { StepInfo } from '../../models/step-info';
import { filter, Subscription } from 'rxjs';
import { PersonalInfo } from '../../models/personal-info';

@Component({
  selector: 'app-btn-bar',
  imports: [NgClass,
    RouterLink
  ],
  templateUrl: './btn-bar.component.html',
  styleUrl: './btn-bar.component.scss'
})

export class BtnBarComponent implements  OnInit,OnDestroy {

  @Input() stepInfo! :  StepInfo;/* step info object */
  currStep!:number; //store the current step
  formInfo! :PersonalInfo
  route!: string;

  public stepNameDict :{[id:number] : string}={//to get the page associated with the current step
    1:"step-one",
    2:"step-two",
    3:"step-three", 
    4:"step-four",
   }
  
   constructor(private stepInfoService : StepInfoService, //service created by me to store step info 
   private router: Router  , private location: Location){}
             
   private subscription: Subscription = new Subscription(); // create and object that follow/subscribe every change 

   ngOnInit(): void {
    this.router.events.subscribe(() => {
      const path = this.location.path().slice(1); // remove de '/'

      const stepKey = Object.entries(this.stepNameDict).find(      // find the key corresponding to the path
        ([key, value]) => value === path
      )?.[0];
    
      // update currStep
      this.currStep = stepKey ? Number(stepKey) : this.currStep;  
      this.stepInfoService.changeStepById(this.currStep); //change the current step for the actual one
    });
  
    const sub = this.stepInfoService.currentStep$.subscribe((step) => {
      this.currStep = step;
    });
    this.stepInfoService.changeStepById(this.currStep);
    this.subscription.add(sub);
  }
  
  

  ngOnDestroy(): void {
    this.subscription.unsubscribe();//stop following every change so the data can be refresh
  }

  onNextClick(): void {
    const nextStep = this.currStep + 1;
    this.stepInfoService.changeStepById(nextStep);//change to the current step to be currentStep = nextStep
    this.router.navigate([this.stepNameDict[nextStep]]);//navigate to the current step + 1
  }

  onBackClick(): void {
    const prevStep = this.currStep - 1;
    this.stepInfoService.changeStepById(prevStep);//change to the current step to be currentStep = nextStep
    this.router.navigate([this.stepNameDict[prevStep]]);//navigate to the current step - 1
  }

  navigateToFinal(): void{
    this.stepInfoService.changeStepById(5);//change to the current step to the final
    this.router.navigate(["step-confirmation"]);//navigate to the final step
  }

}
