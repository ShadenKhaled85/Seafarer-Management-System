import { FormArray, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Component, inject, OnInit } from '@angular/core';
import { AddSeafarerFormsService } from '../../../Core/Services/addSeafarerForms/add-seafarer-form.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-educational-qualifications',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './educational-qualifications.component.html',
  styleUrl: './educational-qualifications.component.css'
})
export class EducationalQualificationsComponent implements OnInit {

  private readonly addSeafarerFormsService = inject(AddSeafarerFormsService)

  qualificationsForm!: FormGroup;
  index: number = 0;

  ngOnInit(): void {
    this.getQualifications();
  }

  getQualifications(){
    this.qualificationsForm = new FormGroup({
      Qualifications: this.addSeafarerFormsService.getQualificationsForm
    })
  }

  get controls() {
    return (this.qualificationsForm.get('Qualifications') as FormArray).controls as FormGroup[];
  }


  addQualification() {
    this.addSeafarerFormsService.addQualification();
    this.index++;
    console.log(this.addSeafarerFormsService.getQualificationsForm.value);
  }

  removeQualification(index: number) {
    this.addSeafarerFormsService.removeQualification(index);
  }

}
