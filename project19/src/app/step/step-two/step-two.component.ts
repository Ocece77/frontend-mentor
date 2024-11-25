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
  title: Title = titleList[1]; 
  @Input() isChecked! : boolean ;
  @Input() currData! : "arcade" | "advanced" | "pro";
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

    const sub = this.currentFullPlan.currentPlan$.subscribe((currPlan)=>{
      this.userPlan = currPlan.plan
    });
    this.subcription.add(sub)// add in subscription so it's following every modification
     
    // set default values
    if (!this.userPlan){
      this.userPlan = new Plan('arcade' , 9);
    }

    // set default values
    if (!this.currData){
     this.currData = "arcade"
    }
  }

  ngOnDestroy(): void {
    this.subcription.unsubscribe(); //stop following the modification
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
    const target = e.target as HTMLElement; // access the target element
    const planCard = target.closest(".plan__card"); // find the element with the class "plan__card"
    const planName = planCard?.getAttribute("data-name"); // retrieve the value
  
    if (planName && planName in this.price) { // check if this is not null
      this.currData = planName as "arcade" | "advanced" | "pro"; // say that this is one of the three type
      const pricePerBilling = this.isChecked ? this.price[this.currData]*10 :  this.price[this.currData]//check is Yearly, uncheck is monthly
      this.userPlan = new Plan(this.currData, pricePerBilling); //create a new plan
      this.currentFullPlan.changePlan(this.userPlan); 
  
    } 
  }


}