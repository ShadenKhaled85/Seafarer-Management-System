import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewSeafarerSidebarComponent } from "../new-seafarer-sidebar/new-seafarer-sidebar.component";
import { SeafarersApiService } from '../../Core/Services/Seafarer-Api/seafarers-api.service';
import { AddSeafarerFormsService } from '../../Core/Services/addSeafarerForms/add-seafarer-form.service';

@Component({
  selector: 'app-new-seafarer',
  imports: [RouterOutlet, NewSeafarerSidebarComponent],
  templateUrl: './new-seafarer.component.html',
  styleUrl: './new-seafarer.component.css'
})
export class NewSeafarerComponent {
  private readonly addSeafarerFormsService = inject(AddSeafarerFormsService)

  submitSeafarerForm(){
    this.addSeafarerFormsService.saveSeafarer().subscribe({
      next:(res)=>{
        console.log(res);
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }

}
