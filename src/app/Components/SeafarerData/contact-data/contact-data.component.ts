import { Component, inject, OnInit } from '@angular/core';
import { AddSeafarerFormsService } from '../../../Core/Services/addSeafarerForms/add-seafarer-form.service';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-data',
  imports: [ReactiveFormsModule],
  templateUrl: './contact-data.component.html',
  styleUrl: './contact-data.component.css'
})
export class ContactDataComponent implements OnInit {
  private readonly AddSeafarerFormsService = inject(AddSeafarerFormsService);
  entityForm !: FormGroup;

  ngOnInit(): void {
    this.callEntityForm();
  }

  callEntityForm(){
    this.entityForm = this.AddSeafarerFormsService.entityForm;
  }
}
