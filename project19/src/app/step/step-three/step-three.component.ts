import { Component, OnInit } from '@angular/core';
import { StepTitleComponent } from '../../components/step-title/step-title.component';
import { BtnBarComponent } from '../../components/btn-bar/btn-bar.component';
import { Title, titleList } from '../../models/title';
import { NgClass } from '@angular/common';
import { Ons } from '../../models/ons';
import { FullPlanInfo } from '../../services/full-plan-info.service';

@Component({
  selector: 'app-step-three',
  imports: [StepTitleComponent,
    BtnBarComponent,
  NgClass],
  templateUrl: './step-three.component.html',
  styleUrl: './step-three.component.scss'
})
export class StepThreeComponent implements OnInit {
  title: Title = titleList[2]; 
  onsList : Ons[] = []
  checkList : string[] = []
  typeOfBilling! : boolean ;
  constructor(private currentFullPlan : FullPlanInfo){} // call the full plan info to retrieve data

  /*dictionnary of ons object link by the checkbox name */
  servicesList:  { [id: string] : Ons } = {
    "first-service" : new Ons("Online Service" , 1),
    "second-service" : new Ons("Larger Storage" , 2),
    "third-service" : new Ons("Customizable Profile" , 2)
  }

  ngOnInit(): void {
    this.onsList 
    this.typeOfBilling = this.currentFullPlan.getTypeBilling() 
  }

  // add the ons in the full plan
  addOns(e: Event){
    const target = e.target as HTMLInputElement
    const checkBoxTargeted = target.name
    this.currentFullPlan.addElement(this.servicesList[checkBoxTargeted])

     
    if (!this.checkList.includes(checkBoxTargeted)){  //check if the element is in the list
      this.checkList =[...this.checkList, checkBoxTargeted] // add the element in the list
    } else {
      this.checkList = this.checkList.filter((el) => el !== checkBoxTargeted); // remove the element 
    }

  }
   

  
}