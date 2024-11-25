import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StepContainerComponent } from './components/step-container/step-container.component';
import { BtnBarComponent } from './components/btn-bar/btn-bar.component';
import { StepInfoService } from './services/step-info.service';
import { Subscription } from 'rxjs';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
    StepContainerComponent, /*left container */
    BtnBarComponent,
    NgClass
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'project19';

  currStep!:number; //store the current step

   constructor(private stepInfoService : StepInfoService, //service created by me to store step info 
  ){}//to navigate through pages lioke a link <a></a>
             
   private subscription: Subscription = new Subscription(); // create and object that follow/subscribe every change 

  ngOnInit(): void {
    const sub = this.stepInfoService.currentStep$.subscribe(step => { //subscribe to follow every change of the currenStep paramaters
      this.currStep = step;
    });
   
    this.subscription.add(sub); //to active the susbcription

  }

}
