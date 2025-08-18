import { Component, inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { AddSeafarerFormsService } from '../../../Core/Services/addSeafarerForms/add-seafarer-form.service';

@Component({
  selector: 'app-certificate',
  imports: [ReactiveFormsModule],
  templateUrl: './certificate.component.html',
  styleUrl: './certificate.component.css'
})
export class CertificateComponent implements OnInit{

  private readonly addSeafarerFormsService = inject(AddSeafarerFormsService)
  private formBuilder = inject(FormBuilder);

  certficatesForm !: FormGroup;
  certificateData = this.addSeafarerFormsService.certificateData;

  ngOnInit(): void {
    this.certficatesForm = this.formBuilder.group({
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

  addCertificate(){
    this.addSeafarerFormsService.addCertificate(this.certficatesForm.value)
    this.resetCertificates();
  }

  resetCertificates(){
    this.certficatesForm.patchValue({
      Capacity: null,
      Regulation: null,
      IssueDate: null,
      ExpiryDate: null,
      IssuingAuthority: null,
      Limitations: null,
      Country: null,
      Type: null,
    })
  }

  removeCertificate(index:number){
    this.addSeafarerFormsService.removeCertificate(index)
  }





}
