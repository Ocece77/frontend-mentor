import { Component, Input, OnInit } from '@angular/core';
import { Title } from '../../models/title';

@Component({
  selector: 'app-step-title',
  imports: [],
  templateUrl: './step-title.component.html',
  styleUrl: './step-title.component.scss'
})
export class StepTitleComponent implements OnInit{
    @Input() title!: Title;  // Using @Input to pass the title from parent

     ngOnInit(): void {
      if (!this.title){
        this.title = new Title("","");
      }
     }

}
