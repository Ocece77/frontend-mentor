import { Component, Input, OnInit } from '@angular/core';
import { StepTitleComponent } from '../../components/step-title/step-title.component';
import { BtnBarComponent } from '../../components/btn-bar/btn-bar.component';
import { Title, titleList } from '../../models/title';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-step-two',
  imports: [StepTitleComponent,
    BtnBarComponent,
  NgClass],
  templateUrl: './step-two.component.html',
  styleUrl: './step-two.component.scss'
})
export class StepTwoComponent implements OnInit {
  title: Title = titleList[1]; 
  @Input() isChecked! : boolean ;
  @Input() currData! : string | null;


  ngOnInit(): void {
    this.isChecked
    if (!this.currData){
     this.currData = "arcade"
    }
  }

  setChecked(){
    this.isChecked =  !this.isChecked /* to choose monthly or yearly plan */
  }
  
  setCurrData(e: Event){
    const target = e.target as HTMLElement;// access to the target
    this.currData = target.closest(".plan__card")!.getAttribute("data-name");// get the closest html element with the class plan__card 

  }

}