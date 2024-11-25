import { Component, OnDestroy, OnInit } from '@angular/core';
import { StepTitleComponent } from '../../components/step-title/step-title.component';
import { BtnBarComponent } from '../../components/btn-bar/btn-bar.component';
import { Title, titleList } from '../../models/title';
import { NgClass } from '@angular/common';
import { Ons } from '../../models/ons';
import { FullPlanInfo } from '../../services/full-plan-info.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-step-three',
  imports: [StepTitleComponent,
    BtnBarComponent,
  NgClass],
  templateUrl: './step-three.component.html',
  styleUrl: './step-three.component.scss'
})
export class StepThreeComponent implements OnInit, OnDestroy {
  title: Title = titleList[2]; 
  onsList : Set<Ons> = new Set();
  checkedOnsList : string[] = []
  typeOfBilling! : boolean ;

  constructor(private currentFullPlan : FullPlanInfo){} // call the full plan info to retrieve data
  private subscription : Subscription = new Subscription();// new subscription to follow behavior

  /*dictionnary of ons object link by the checkbox name */
  servicesList:  { [id: string] : Ons } = {
    "first-service" : new Ons("Online Service" , 1),
    "second-service" : new Ons("Larger Storage" , 2),
    "third-service" : new Ons("Customizable Profile" , 2)
  }

  ngOnInit(): void {
    this.typeOfBilling = this.currentFullPlan.getTypeBilling() 
    
    const sub = this.currentFullPlan.currentPlan$.subscribe((currPlan)=>{
      this.onsList = currPlan.ons; // set the list with the current list value on Init
      this.updateCheckedOnsList(); // Update checkedOnsList based on current ons

    })
    this.subscription.add(sub);
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe()
  }

   // Updates checkedOnsList based on the current onsList
  private updateCheckedOnsList(): void {
    this.checkedOnsList = Array.from(this.onsList).map((ons) => ons.name);
  }

  // add the ons in the full plan
  addOns(e: Event) {
    const target = e.target as HTMLInputElement;
    const checkBoxTargeted = target.name; // Le nom du checkbox déclencheur
    const targetOns = this.servicesList[checkBoxTargeted]; // Récupère l'objet Ons correspondant
  
    if (targetOns) {
      this.currentFullPlan.addElement(targetOns); // Ajoute ou retire l'Ons dans le plan
  
      // Mets à jour la liste des éléments cochés
      if (this.checkedOnsList.includes(targetOns.name)) {
        // Si déjà coché, retire-le
        this.checkedOnsList = this.checkedOnsList.filter((name) => name !== targetOns.name);
      } else {
        // Sinon, ajoute-le
        this.checkedOnsList = [...this.checkedOnsList, targetOns.name];
      }
    }
  
    // Debugging
    console.log("Liste des Ons cochés :", this.checkedOnsList);
    console.log("État actuel des Ons dans le plan :", [...this.currentFullPlan.getUserFullPlan().ons]);
  }
  

  
}