import { Injectable } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ICertificate, IQualificaiton, ISeafarer } from '../../../Models/ISeafarer';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root'
})

export class AddSeafarerFormsService {

  private get headers() {
    const token = localStorage.getItem('token');
    return new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
  }

  seafarerForm!: FormGroup; // Main Form
  entityForm !: FormGroup;
  qualificationData: IQualificaiton[] = [];
  certificateData: ICertificate[] = [];


  constructor(private formBuilder: FormBuilder, private httpClient: HttpClient) {
    // ======== ENTITY FORM ========
      this.entityForm = this.formBuilder.group({

            // Personal Data Form
            EmpId: [0],
            Nationality: [null],
            BirthDate: [null],
            // Age: [{ value: null, disabled: true }],
            Age: [null],
            BirthPlace: [null],
            Religion: [null],
            MaritalStatus: [null],
            NameOfSpouse: [null],
            NoOfChildren: [0],
            BodyWeight: [0],
            Height: [0],
            NearestAirport: [null],
            Remarks: [null],
            EmploymentDate: [null],
            PassportNumber: [null],
            PassPortIssueDate: [null],
            PassportExpireDate: [null],
            JobNameEN: [null],
            VisaSponsorId: [null],
            VisaUAEIdNO: [null],
            VisaIssueDate: [null],
            VisaExpiryDate: [null],
            ResidenceNumber: [null],
            MedicalInsuranceDate: [null],

            // Contact Data Form
            Email: [null],
            PermanentAddressHomeCountry: [null],
            ContactNumberHomeCountry: [null],
            ContactNameAndNumberDuringEmergenciesUAE: [null],
            ContactNameAndNumberDuringEmergenciesHome: [null],

            // Offshore Data Form
            SeamanBookNO: [null],
            SeamanIssueDate: [null],
            SeamanExpiryDate: [null],
            CicpaNO: [null],
            CicpaIssueDate: [null],
            CicpaExpiryDate: [null],

            // Extra Fields
            IDExPiryDate: [null],
            SkypeID: [null],
            Declaration: [null],
            SignedOffFromAShipDueToMedicalReason: [null],
            SignedOffFromAShipDueToMedicalReasonComment: [null],
            UndergoneAnyMdicalOperation: [null],
            UndergoneAnyMdicalOperationComment: [null],
            DoctorConsultation: [null],
            DoctorConsultationComment: [null],
            HealthOrDisabilityProblem: [null],
            HealthOrDisabilityProblemComment: [null],
            InquiryOrInvolvedMaritimeAccident: [null],
            InquiryOrInvolvedMaritimeAccidentComment: [null],
            LicenseSuspendedOrRevoked: [null],
            LicenseSuspendedOrRevokedComment: [null]
      })

    // ======== MAIN SEAFARER FORM ========
    this.seafarerForm = this.formBuilder.group({
      Entity: this.entityForm,
      Qualifications: this.qualificationData,
      Certificates: this.certificateData,
      Languages: this.formBuilder.array([]),
      References: this.formBuilder.array([]),
      WorkExperiences: this.formBuilder.array([])
    });
  }

  // ======== Qualifications ========
  addQualification(qualificationData: IQualificaiton) {
    this.qualificationData.push(qualificationData);
  }

  removeQualification(index: number) {
    this.qualificationData.splice(index, 1);
  }

  // ======== Certificates ========
  addCertificate(certificateData:ICertificate){
    this.certificateData.push(certificateData);
  }

  removeCertificate(index:number){
    this.certificateData.splice(index,1);
  }

  // ======== Languages ========
  createLanguage(): FormGroup{
    return this.formBuilder.group({
      Language: [null],
      Read: [null],
      Write: [null],
      Speak: [null],
    })
  }

  get languages(): FormArray {
    return this.seafarerForm.get('Languages') as FormArray;
  }

// ======== SUBMIT SEAFARER FORM ========
  saveSeafarer(): Observable<ISeafarer> {
    const payload = {
      Entity: this.entityForm.value,
      Qualifications: this.qualificationData,
      Certificates: this.certificateData,
      Languages: this.languages.value,
      References: this.formBuilder.array([]).value,
      WorkExperiences: this.formBuilder.array([]).value
    };

    console.log("Payload sent:", payload);
    return this.httpClient.post<ISeafarer>(
      `${environment.baseUrl}/api/MarineServices/SaveSeafarer?InCT`,
      payload,
      { headers: this.headers }
    );
  }

}




