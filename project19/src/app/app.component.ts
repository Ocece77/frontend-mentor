import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StepContainerComponent } from './components/step-container/step-container.component';
import { StepContentContainerComponent } from './components/step-content-container/step-content-container.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
    StepContainerComponent, /*left container */
    StepContentContainerComponent /*right container */

  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'project19';
}
