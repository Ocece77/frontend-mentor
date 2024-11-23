import { Component, OnInit } from '@angular/core';
import { Title } from '../../models/title';

@Component({
  selector: 'app-step-title-list',
  imports: [],
  templateUrl: './step-title-list.component.html',
  styleUrl: './step-title-list.component.scss'
})
export class StepTitleListComponent implements OnInit {
  titleList! : Title[]
  ngOnInit(): void {
      this.titleList=[/*list of title for each step */
        new Title(
          "Personal info"
          "Please provide your name, email address, and phone number."
        ),
        new Title(
          "Personal info"
          "Please provide your name, email address, and phone number."
        ),
        new Title(
          "Personal info"
          "Please provide your name, email address, and phone number."
        ),
        new Title(
          "Personal info"
          "Please provide your name, email address, and phone number."
        ),
      ];
  }
 
}
