import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { NewSeafarerSidebarComponent } from "../new-seafarer-sidebar/new-seafarer-sidebar.component";
import { AddSeafarerFormsService } from '../../Core/Services/addSeafarerForms/add-seafarer-form.service';
import { PersonalDataComponent } from "../SeafarerData/personal-data/personal-data.component";
import { ContactDataComponent } from "../SeafarerData/contact-data/contact-data.component";
import { ISeafarer } from '../../Models/ISeafarer';
import { OffshoreDataComponent } from "../SeafarerData/offshore-data/offshore-data.component";
import { EducationalQualificationsComponent } from "../SeafarerData/educational-qualifications/educational-qualifications/educational-qualifications.component";
import { CertificateComponent } from "../SeafarerData/certificate/certificate.component";
import { OtherTrainingComponent } from "../SeafarerData/other-training/other-training.component";
import { LanguagesComponent } from "../SeafarerData/languages/languages.component";
import { HealthDataComponent } from "../SeafarerData/health-data/health-data.component";
import { ReferencesComponent } from "../SeafarerData/references/references.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-seafarer',
  imports: [NewSeafarerSidebarComponent, PersonalDataComponent, ContactDataComponent, OffshoreDataComponent, EducationalQualificationsComponent, CertificateComponent, OtherTrainingComponent, LanguagesComponent, HealthDataComponent, ReferencesComponent],
  templateUrl: './new-seafarer.component.html',
  styleUrl: './new-seafarer.component.css'
})
export class NewSeafarerComponent {

  private readonly addSeafarerFormsService = inject(AddSeafarerFormsService)

  @Output() closeAddSeafarer = new EventEmitter();
  newSeafarer !: ISeafarer;
  isSideNav: string = '';

  submitSeafarerForm(){
    this.addSeafarerFormsService.saveSeafarer().subscribe({
      next:(res)=>{
        console.log(res);
        this.newSeafarer = res;
        this.onCloseAddSeafarer();
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }

  onCloseAddSeafarer(){
    this.closeAddSeafarer.emit(true);
  }

}
