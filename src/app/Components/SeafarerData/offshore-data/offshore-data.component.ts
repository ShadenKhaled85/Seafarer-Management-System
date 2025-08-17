import { Component, inject, OnInit } from '@angular/core';
import { EntityFormService } from '../../../Core/Services/entityForm/entity-form.service';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-offshore-data',
  imports: [ReactiveFormsModule],
  templateUrl: './offshore-data.component.html',
  styleUrl: './offshore-data.component.css'
})
export class OffshoreDataComponent implements OnInit{

  private readonly entityFormService = inject(EntityFormService);
  entityForm !: FormGroup;

  ngOnInit(): void {
    this.callEntityForm();
    this.entityFormService.submitEntityForm()
  }

  callEntityForm(){
    this.entityForm = this.entityFormService.entityForm;
    console.log(this.entityForm);
  }
}
