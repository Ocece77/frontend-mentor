import { Component, OnInit } from '@angular/core';
import { StepTitleComponent } from '../../components/step-title/step-title.component';
import { Title ,titleList } from '../../models/title';
import { BtnBarComponent } from '../../components/btn-bar/btn-bar.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-step-one',
  imports: [StepTitleComponent,
    BtnBarComponent,
    
  ],
  templateUrl: './step-one.component.html',
  styleUrl: './step-one.component.scss'
})
export class StepOneComponent implements OnInit {
  title: Title = titleList[0]; 
  formData = new FormGroup({
    name: new FormControl<string>('', [Validators.required]),
    email: new FormControl<string>('', [Validators.required, Validators.email]),
    phone: new FormControl<string>('', [Validators.required]),
  });

  ngOnInit(): void {
    this.formData
  }

}
