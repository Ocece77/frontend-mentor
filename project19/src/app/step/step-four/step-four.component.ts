import { Component, OnInit } from '@angular/core';
import { StepTitleComponent } from '../../components/step-title/step-title.component';
import { BtnBarComponent } from '../../components/btn-bar/btn-bar.component';
import { Title, titleList } from '../../models/title';

@Component({
  selector: 'app-step-four',
  imports: [StepTitleComponent,
    BtnBarComponent
  ],
  templateUrl: './step-four.component.html',
  styleUrl: './step-four.component.scss'
})
export class StepFourComponent implements OnInit {
  title: Title = titleList[3]; 

  ngOnInit(): void {
    
  }
}