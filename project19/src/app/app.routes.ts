import { Routes } from '@angular/router';
import { StepOneComponent } from './step/step-one/step-one.component';
import { StepTwoComponent } from './step/step-two/step-two.component';
import { StepThreeComponent } from './step/step-three/step-three.component';
import { StepFourComponent } from './step/step-four/step-four.component';
import { StepConfirmationComponent } from './step/step-confirmation/step-confirmation.component';

export const routes: Routes = [
  {path : 'step-one', component : StepOneComponent},
  {path : 'step-two', component : StepTwoComponent},
  {path : 'step-three', component : StepThreeComponent},
  {path : 'step-four', component : StepFourComponent},
  {path : 'step-confirmation', component : StepConfirmationComponent},


];
