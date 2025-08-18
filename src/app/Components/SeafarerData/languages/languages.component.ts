import { Component, inject, } from '@angular/core';
import { FormArray, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AddSeafarerFormsService } from '../../../Core/Services/addSeafarerForms/add-seafarer-form.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-languages',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './languages.component.html',
  styleUrl: './languages.component.css'
})
export class LanguagesComponent {
  private readonly addSeafarerFormsService = inject(AddSeafarerFormsService)

languageForm!: FormGroup;

  ngOnInit(): void {
    this.languageForm = this.addSeafarerFormsService.seafarerForm;
  }

  get languages(): FormArray {
    return this.addSeafarerFormsService.languages;
  }

  addLanguage() {
    this.languages.push(this.addSeafarerFormsService.createLanguage());
  }

  removeLanguage(index: number) {
    this.languages.removeAt(index);
  }
}
