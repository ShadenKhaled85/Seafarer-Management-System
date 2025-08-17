import { Component, inject, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AddSeafarerFormsService } from '../../../Core/Services/addSeafarerForms/add-seafarer-form.service';

@Component({
  selector: 'app-offshore-data',
  imports: [ReactiveFormsModule],
  templateUrl: './offshore-data.component.html',
  styleUrl: './offshore-data.component.css'
})
export class OffshoreDataComponent implements OnInit{

  private readonly AddSeafarerFormsService = inject(AddSeafarerFormsService);
  entityForm !: FormGroup;

  ngOnInit(): void {
    this.callEntityForm();
  }

  callEntityForm(){
    this.entityForm = this.AddSeafarerFormsService.entityForm;
    console.log(this.entityForm.value);
  }
}
