import { Component, OnInit } from '@angular/core';
import { StepTitleComponent } from '../../components/step-title/step-title.component';
import { BtnBarComponent } from '../../components/btn-bar/btn-bar.component';
import { Title, titleList } from '../../models/title';
import { FullPlanInfo } from '../../services/full-plan-info.service';
import { FullPlan } from '../../models/full-plan';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-step-four',
  imports: [StepTitleComponent,
    BtnBarComponent,
    RouterLink
  ],
  templateUrl: './step-four.component.html',
  styleUrl: './step-four.component.scss'
})
export class StepFourComponent implements OnInit {
  title: Title = titleList[3]; 
  fullPlanData! : FullPlan ;
  typeBilling! : boolean ;
  totalAmount! : number ;

  
  constructor(private fullplaninfo : FullPlanInfo){}

  ngOnInit(): void {
    this.fullPlanData = this.fullplaninfo.getUserFullPlan();
    this.typeBilling = this.fullplaninfo.getTypeBilling();
    this.totalAmount = this.fullplaninfo.getTotalAmount();
  }



}