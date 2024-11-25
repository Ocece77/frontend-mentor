import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { StepTitleComponent } from '../../components/step-title/step-title.component';
import { BtnBarComponent } from '../../components/btn-bar/btn-bar.component';
import { Title, titleList } from '../../models/title';
import { NgClass } from '@angular/common';
import { Plan } from '../../models/plan';
import { FullPlanInfo } from '../../services/full-plan-info.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-step-two',
  imports: [StepTitleComponent,
    BtnBarComponent,
  NgClass],
  templateUrl: './step-two.component.html',
  styleUrl: './step-two.component.scss'
})
export class StepTwoComponent implements OnInit , OnDestroy{
  title: Title = titleList[1]; /*the title of the step and the description */
  @Input() isChecked! : boolean ;  //get the billing type - yearly(true) or monthly(false)
  @Input() currData! : string;
  userPlan! : Plan;

   // dictionnary of plan and their price
   price = {
    "arcade" : 9,
    "advanced" : 12,
    "pro" : 15,
  }


  constructor(private currentFullPlan : FullPlanInfo){}
  private subcription : Subscription = new Subscription()// new subscription to follow behavior


  ngOnInit(): void {

 // Subscribe to the current plan observable
      const sub = this.currentFullPlan.currentPlan$.subscribe(currPlan => {
        this.userPlan = currPlan.plan;
      });
    this.subcription.add(sub)// add in subscription so it's following every modification
    // set default values
    if (!this.userPlan){
      this.userPlan = new Plan('arcade' , 9);
    }
    this.currData = this.currentFullPlan.getUserFullPlan().plan.name!

  }

  ngOnDestroy(): void {
    this.subcription.unsubscribe(); // Clean up subscriptions
  }

  // check if this is monthly or yealy
  setChecked(){
    this.isChecked =  !this.isChecked
    this.currentFullPlan.changeTypeOfBilling(this.isChecked) /* to choose monthly or yearly plan */
  }
  
  setUserPlan(){
    this.currentFullPlan.addElement(this.userPlan);//set the plan selected by the user
  }

  setCurrData(e: Event) {
    const target = e.target as HTMLElement;
    const planCard = target.closest(".plan__card"); // div element with the class .plan__card
    const planName = planCard?.getAttribute("data-name"); // get the value of the dataset "data-name"
    
    if (planName && planName in this.price) { 
      const selectedPlan = planName as "arcade" | "advanced" | "pro"; //can only be this three value
      const pricePerBilling = this.isChecked ? this.price[selectedPlan] * 10 : this.price[selectedPlan]; 
      const newPlan = new Plan(selectedPlan, pricePerBilling); // create a new plan
      this.currentFullPlan.changePlan(newPlan); // update the current user choice of plan
      this.currData = selectedPlan
    } 
  }
  


}