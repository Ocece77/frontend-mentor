import { Injectable } from "@angular/core";
import { StepInfo } from "../models/step-info";

@Injectable({
  providedIn: 'root' /*inject the service in the root of the app */
})
export class StepInfoService{
  
  private stepInfos : StepInfo[] = [

    new StepInfo("one",1, 'your info').withCurrentStep(true),

    new StepInfo("two" ,2, 'select plan'),

    new StepInfo("three" ,3, 'add-ons'),

    new StepInfo("four",4, 'summary'),

  ];

  getStepInfo(): StepInfo[]{
    return [...this.stepInfos]; /*put the entire array of StepInfo */
  }


  findStepById(stepId: number):void{ /*This function find the current step */
    const currStep : StepInfo | undefined = this.stepInfos.find(step => step.id == stepId) /*if the current step  equals the id of the object*/
    const notCurrStep : StepInfo[] | undefined = this.stepInfos.filter(step => step.id != stepId) /*if the current step  do not equals the id of the object*/

    if (!currStep){
      throw new Error("step not found ! ")
    }
    currStep.withCurrentStep(true)/*we set it to true */

    notCurrStep!.map(step => step.withCurrentStep(false))/*we the other to false */
    console.log(`current step : ${currStep.id} \n
      other step : ${notCurrStep.map(step => step.id)}`)
  }

}