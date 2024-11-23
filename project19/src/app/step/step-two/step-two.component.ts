import { Component, OnInit } from '@angular/core';
import { StepTitleComponent } from '../../components/step-title/step-title.component';
import { BtnBarComponent } from '../../components/btn-bar/btn-bar.component';
import { Title, titleList } from '../../models/title';

@Component({
  selector: 'app-step-two',
  imports: [StepTitleComponent,
    BtnBarComponent],
  templateUrl: './step-two.component.html',
  styleUrl: './step-two.component.scss'
})
export class StepTwoComponent implements OnInit {
  title: Title = titleList[1]; 

  ngOnInit(): void {
    
  }

}