import { Component, OnInit } from '@angular/core';
import { Title } from '../../models/title';

@Component({
  selector: 'app-step-title',
  imports: [],
  templateUrl: './step-title.component.html',
  styleUrl: './step-title.component.scss'
})
export class StepTitleComponent implements OnInit{
     title! : Title ;

     ngOnInit(): void {
         this.title;
     }

}
