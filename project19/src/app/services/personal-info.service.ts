import { Injectable } from "@angular/core";
import { StepInfo } from "../models/step-info";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root' /*inject the service in the root of the app */
})
export class StepInfoService{
  
  private stepInfos : StepInfo[] = [

    new StepInfo("one",1, 'your info').withCurrentStep(true),

    new StepInfo("two" ,2, 'select plan'),

    new StepInfo("three" ,3, 'add-ons'),

    new StepInfo("four",4, 'summary'),

    new StepInfo("confirmation",5, 'Thank you'),

  ];

  private currentStepSubject = new BehaviorSubject<number>(1); // Initialize at step 1
  public currentStep$ = this.currentStepSubject.asObservable(); // Observable for other components to subscribe


  getStepInfo(): StepInfo[]{
    return [...this.stepInfos]; /*put the entire array of StepInfo */
  }

 
}