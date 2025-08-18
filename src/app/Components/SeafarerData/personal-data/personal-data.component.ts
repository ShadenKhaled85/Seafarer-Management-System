import { SeafarersApiService } from './../../../Core/Services/Seafarer-Api/seafarers-api.service';
import { Component, inject, OnInit } from '@angular/core';
import { IEmployee } from '../../../Models/iemployee';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IVendor } from '../../../Models/ivendor';
import { AddSeafarerFormsService } from '../../../Core/Services/addSeafarerForms/add-seafarer-form.service';

@Component({
  selector: 'app-personal-data',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './personal-data.component.html',
  styleUrl: './personal-data.component.css'
})
export class PersonalDataComponent implements OnInit {

  private readonly seafarersApiService = inject(SeafarersApiService);
  private readonly AddSeafarerFormsService = inject(AddSeafarerFormsService);

  employees: IEmployee[]=[];
  vendors: IVendor[]=[];
  selectedEmployee: IEmployee[]=[];
  selectedVisaSponsor: IVendor[]=[];
  entityForm !: FormGroup;

  ngOnInit(): void {
    this.fillEmployee();
    this.fillVendor();
    this.callEntityForm();
  }

  callEntityForm(){
    this.entityForm = this.AddSeafarerFormsService.entityForm;
  }

  fillEmployee(){
    this.seafarersApiService.fillEmployee().subscribe({
      next:(res)=>{
        this.employees = res;
        console.log(this.employees);
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }

  fillVendor(){
    this.seafarersApiService.fillVendor().subscribe({
      next:(res)=>{
        this.vendors = res;
        console.log(this.vendors);
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }

  onNameSelect() {
  const selectedEmpId = this.entityForm.get('EmpId')?.value;
  console.log("Selected employee id:", selectedEmpId);
}

  onVisaSelect(){
    const selectedVisaId = this.entityForm.get('VisaSponsorId')?.value;
    console.log("Selected visa id:", selectedVisaId);
  }

}
