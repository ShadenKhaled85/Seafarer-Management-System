import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-offshore-data',
  imports: [ReactiveFormsModule],
  templateUrl: './offshore-data.component.html',
  styleUrl: './offshore-data.component.css'
})
export class OffshoreDataComponent {

  entityForm !: FormGroup;

}
