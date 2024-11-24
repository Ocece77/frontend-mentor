import { Component, OnInit } from '@angular/core';
import { StepTitleComponent } from '../../components/step-title/step-title.component';
import { BtnBarComponent } from '../../components/btn-bar/btn-bar.component';
import { Title, titleList } from '../../models/title';
import { NgClass } from '@angular/common';

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

  ngOnInit(): void {
    
  }

}