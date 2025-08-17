import { Injectable } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AddSeafarerFormsService {

  entityForm !: FormGroup;
  seafarerForm!: FormGroup; // Main Form

  constructor(private formBuilder: FormBuilder) {
    // ======== ENTITY FORM ========
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

    // ======== MAIN SEAFARER FORM ========
    this.seafarerForm = this.formBuilder.group({
      entity: this.entityForm,
      Qualifications: this.formBuilder.array([this.createQualification()]),
      Certificates: this.formBuilder.array([]),
      Languages: this.formBuilder.array([]),
      References: this.formBuilder.array([])
    });
  }

  // ======== QUALIFICATIONS ========
  createQualification(): FormGroup {
    return this.formBuilder.group({
      DegreeOrCourse: [null, Validators.required],
      MajorOrSubject: [null, Validators.required],
      CourseIssueDate: [null, Validators.required],
      University: [null, Validators.required],
      Country: [null, Validators.required],
    });
  }

  // Get qualifications form array
  get getQualificationsForm(){
    return this.seafarerForm.get('Qualifications') as FormArray;
  }

  // Add a new qualification
  addQualification() {
    this.getQualificationsForm.push(this.createQualification());
  }

  // Remove qualification by index
  removeQualification(index: number) {
    this.getQualificationsForm.removeAt(index);
  }

  // ======== Certificates ========
  createCertificates(): FormGroup{
    return this.formBuilder.group({
      Capacity: [null],
      Regulation: [null],
      IssueDate: [null],
      ExpiryDate: [null],
      IssuingAuthority: [null],
      Limitations: [null],
      Country: [null],
      Type: [null],
    })
  }

  // Get Certificates form array
  get CertificatesForm(): FormArray{
    return this.seafarerForm.get('Certificates') as FormArray;
  }

  // Add a new certificate
  addCertificate(){
    // this.CertificatesForm().push(this.createCertificates());
  }

  removeCertificate(index:number){
    // this.getQualificationsForm().removeAt(index)
  }

  // ======== Languages ========
  createLanguages(): FormGroup{
    return this.formBuilder.group({
      Capacity: [null],
      Regulation: [null],
      IssueDate: [null],
      ExpiryDate: [null],
      IssuingAuthority: [null],
      Limitations: [null],
      Country: [null],
    })
  }

  // ======== References ========
  createReference(): FormGroup{
    return this.formBuilder.group({
      PersonName: [null],
      CompanyName: [null],
      Country: [null],
      Fax: [null],
      EmailId: [null],
    })
  }


  // ======== SUBMIT SEAFARER FORM ========
  submitSeafarerForm() {
    if (this.seafarerForm.valid) {
      console.log(this.seafarerForm.value);
    } else {
      console.warn('Form is invalid');
    }
  }

    submitEntityForm(){
    if(this.entityForm.valid){
      console.log(this.entityForm.value);
    }
  }

}

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



