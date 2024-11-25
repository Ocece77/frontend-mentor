import { NgClass, } from '@angular/common';
import { Component, DoCheck, Input, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { StepInfoService } from '../../services/step-info.service';
import { StepInfo } from '../../models/step-info';
import { Subscription } from 'rxjs';

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

  public stepNameDict :{[id:number] : string}={//to get the page associated with the current step
    1:"step-one",
    2:"step-two",
    3:"step-three", 
    4:"step-four",
    
   }
  
   constructor(private stepInfoService : StepInfoService, //service created by me to store step info 
   private router: Router){}//to navigate through pages lioke a link <a></a>
             
   private subscription: Subscription = new Subscription(); // create and object that follow/subscribe every change 

  ngOnInit(): void {
    const sub = this.stepInfoService.currentStep$.subscribe(step => { //subscribe to follow every change of the currenStep paramaters
      this.currStep = step;
    });
    this.subscription.add(sub); //to active the susbcription
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
