import { Component, inject, OnInit } from '@angular/core';
import { EntityFormService } from '../../../Core/Services/entityForm/entity-form.service';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-data',
  imports: [ReactiveFormsModule],
  templateUrl: './contact-data.component.html',
  styleUrl: './contact-data.component.css'
})
export class ContactDataComponent implements OnInit {
  private readonly entityFormService = inject(EntityFormService);
  entityForm !: FormGroup;

  ngOnInit(): void {
    this.callEntityForm();
  }

  callEntityForm(){
    this.entityForm = this.entityFormService.entityForm;
  }
}
