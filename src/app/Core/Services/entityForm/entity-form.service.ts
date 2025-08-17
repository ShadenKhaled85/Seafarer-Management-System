import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class EntityFormService {

  entityForm !: FormGroup;

  constructor(private formBuilder: FormBuilder) {
          this.entityForm = this.formBuilder.group({

            // Personal Data Form
            EmpId: [0],
            Nationality: [null],
            BirthDate: [null],
            Age: [{ value: null, disabled: true }],
            BirthPlace: [null],
            Religion: [null],
            MaritalStatus: [null],
            NameOfSpouse: [null],
            NoOfChildren: [0, [Validators.required]],
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
      })
  }

  submitEntityForm(){
    if(this.entityForm.valid){
      console.log(this.entityForm.value);
    }
  }



          // IDExPiryDate: [''],
          // SkypeID: [''],
          // Declaration: [''],
          // SignedOffFromAShipDueToMedicalReason: [false],
          // SignedOffFromAShipDueToMedicalReasonComment: [''],
          // UndergoneAnyMdicalOperation: [null],
          // UndergoneAnyMdicalOperationComment: [''],
          // DoctorConsultation: [null],
          // DoctorConsultationComment: [''],
          // HealthOrDisabilityProblem: [null],
          // HealthOrDisabilityProblemComment: [''],
          // InquiryOrInvolvedMaritimeAccident: [false],
          // InquiryOrInvolvedMaritimeAccidentComment: [''],
          // LicenseSuspendedOrRevoked: [null],
          // LicenseSuspendedOrRevokedComment: ['']


    //     Qualifications: this.fb.array([]),
    //     Certificates: this.fb.array([]),
    //     Languages: this.fb.array([]),
    //     References: this.fb.array([]),
    //     WorkExperiences: this.fb.array([])
    //   });


    // // FormArray getters
    // get qualifications(): FormArray {
    //   return this.seafarerForm.get('Qualifications') as FormArray;
    // }
    // get certificates(): FormArray {
    //   return this.seafarerForm.get('Certificates') as FormArray;
    // }
    // get languages(): FormArray {
    //   return this.seafarerForm.get('Languages') as FormArray;
    // }
    // get references(): FormArray {
    //   return this.seafarerForm.get('References') as FormArray;
    // }
    // get workExperiences(): FormArray {
    //   return this.seafarerForm.get('WorkExperiences') as FormArray;
    // }

    // // Add Qualification
    // addQualification() {
    //   this.qualifications.push(this.fb.group({
    //     DegreeOrCourse: [''],
    //     CourseIssueDate: [''],
    //     ExpiryDate: [''],
    //     MajorOrSubject: [''],
    //     University: [''],
    //     Country: [''],
    //     Type: [1]
    //   }));
    // }

    // // Add Certificate
    // addCertificate() {
    //   this.certificates.push(this.fb.group({
    //     Capacity: [''],
    //     Regulation: [''],
    //     IssueDate: [''],
    //     ExpiryDate: [''],
    //     IssuingAuthority: [''],
    //     Limitations: [''],
    //     Country: [''],
    //     Type: [1]
    //   }));
    // }

    // // Add Language
    // addLanguage() {
    //   this.languages.push(this.fb.group({
    //     Capacity: [''],
    //     Regulation: [''],
    //     IssueDate: [''],
    //     ExpiryDate: [''],
    //     IssuingAuthority: [''],
    //     Limitations: [''],
    //     Country: ['']
    //   }));
    // }

    // // Add Reference
    // addReference() {
    //   this.references.push(this.fb.group({
    //     PersonName: [''],
    //     CompanyName: [''],
    //     Country: [''],
    //     Fax: [''],
    //     EmailId: ['']
    //   }));
    // }

    // // Add WorkExperience
    // addWorkExperience() {
    //   this.workExperiences.push(this.fb.group({
    //     VesselName: [''],
    //     VesselType: [''],
    //     Rank: [''],
    //     From: [''],
    //     To: [''],
    //     GRT: [''],
    //     BHP: [''],
    //     CompanyName: ['']
    //   }));
    // }

}
