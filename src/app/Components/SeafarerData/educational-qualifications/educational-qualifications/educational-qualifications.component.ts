import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddSeafarerFormsService } from '../../../../Core/Services/addSeafarerForms/add-seafarer-form.service';

@Component({
  selector: 'app-educational-qualifications',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './educational-qualifications.component.html',
  styleUrl: './educational-qualifications.component.css'
})
export class EducationalQualificationsComponent implements OnInit {

  private readonly addSeafarerFormsService = inject(AddSeafarerFormsService)
  private formBuilder = inject(FormBuilder);

  qualificationsForm!: FormGroup;
  qualificationData = this.addSeafarerFormsService.qualificationData;


  ngOnInit(): void {
    this.qualificationsForm = this.formBuilder.group({
      DegreeOrCourse: [null],
      MajorOrSubject: [null],
      CourseIssueDate: [null],
      University: [null],
      Country: [null],
  })
  }

  addQualification(){
    this.addSeafarerFormsService.addQualification(this.qualificationsForm.value);
    this.resetQualificationForm();
  }

  resetQualificationForm(){
    this.qualificationsForm.patchValue({
      DegreeOrCourse: null,
      MajorOrSubject: null,
      CourseIssueDate: null,
      University: null,
      Country: null
    })
  }

  removeQualification(index: number){
    this.addSeafarerFormsService.removeQualification(index);
  }

}
