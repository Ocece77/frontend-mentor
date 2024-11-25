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
  private totalAmount : number = 0;


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
    const additionAmount = this.userfullPlan.plan.price! +  this.userfullPlan.ons.reduce((acc, curr) => acc + curr.price  , 0) 
    return this.typeBilling ? additionAmount * 10 : additionAmount
  }

  addElement(element: Plan | Ons) {
    if (element instanceof Plan) {
      // If the element is a Plan, update the user's full plan.
      this.userfullPlan.plan = element;
    } else if (element instanceof Ons) {
      const onsIndex = this.userfullPlan.ons.indexOf(element);
  
      if (onsIndex === -1) {
        // If the Ons is not already in the list, add it.
        this.userfullPlan.ons = [...this.userfullPlan.ons, element];
      } else {
        // If the Ons is already in the list, remove it.
        this.userfullPlan.ons = this.userfullPlan.ons.filter((ons) => ons !== element);
      }
    }
  }

  changePlan(plan: Plan): void {
    const current = this.currentPlanSubject.value;
    this.currentPlanSubject.next({ ...current, plan }); //update the plan
  }

  changeTypeOfBilling(checkElement : boolean){
    this.typeBilling = checkElement;
  }
  

}

