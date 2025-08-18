import { Component } from '@angular/core';
import { SeafarersFilterComponent } from "../../Components/seafarers-filter/seafarers-filter.component";
import { SeafarerEmpDataComponent } from "../../Components/seafarer-emp-data/seafarer-emp-data.component";

@Component({
  selector: 'app-seafarers',
  imports: [SeafarersFilterComponent, SeafarerEmpDataComponent],
  templateUrl: './seafarers.component.html',
  styleUrl: './seafarers.component.css'
})
export class SeafarersComponent {

  searchName : string = '';
  searchNationality : string = '';

}
