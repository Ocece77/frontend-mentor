import { Injectable } from "@angular/core";
import { FullPlan } from "../models/full-plan";
import { Ons } from "../models/ons";
import { Plan } from "../models/plan";
import { BehaviorSubject } from "rxjs";

@Injectable({ /*inject the service in the root of the app */
  providedIn: 'root'
})

export class FullPlanInfo{

  private userfullPlan = new FullPlan()
  private typeBilling: boolean = false; // false is Monthly , true is Yearly

  private currentPlanSubject = new BehaviorSubject<FullPlan>(this.userfullPlan); // Initialize at step 1
  public currentPlan$ = this.currentPlanSubject.asObservable(); // Observable for other components to subscribe

//get the value of the full plan object
  getUserFullPlan(){
    return this.userfullPlan
  }

  //get the boolean value of the type billing
  getTypeBilling(){
    return this.typeBilling
  }

  //get the value of the total amount
  getTotalAmount(){
    const additionAmount = this.userfullPlan.plan.price! +  Array.from(this.userfullPlan.ons).reduce((acc, curr) => acc + curr.price  , 0) 
    return this.typeBilling ? additionAmount * 10 : additionAmount
  }

  addElement(element: Plan | Ons) {
    if (element instanceof Plan) {
      this.userfullPlan.plan = element;
    } else if (element instanceof Ons) {
   //check if there's already an ons in it - convert the ons set into and array thank to the Array.from() method and find if there's the ons in it already 
      const existingOns = Array.from(this.userfullPlan.ons).find((ons) => ons.name === element.name);   
   
      if (existingOns) {
        this.userfullPlan.ons.delete(existingOns); // delete the existing ons
      } else {
        this.userfullPlan.ons.add(element); // add a new ons
      }
    }
    this.currentPlanSubject.next(this.userfullPlan); // change the value of the susbriber
  }
  
  changePlan(plan: Plan): void {
    this.userfullPlan.plan = plan; //update the plan object
    this.currentPlanSubject.next(this.userfullPlan); // spread the current value in the behavior object so this update the value
  }
  

  changeTypeOfBilling(checkElement : boolean){
    this.typeBilling = checkElement;
  }
  

}

