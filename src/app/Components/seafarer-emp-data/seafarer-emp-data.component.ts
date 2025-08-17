import { Component, inject, Input, SimpleChanges } from '@angular/core';
import { ISeafarer } from '../../Models/ISeafarer';
import { seafarerDisplayedColumns } from '../../Enums/SeafarerEnums';
import { seafarerDataColumn } from '../../Models/seafarerDataColumn';
import { SeafarersApiService } from '../../Core/Services/Seafarer-Api/seafarers-api.service';
import { SeafarerDisplayColumnsService } from '../../Core/Services/Seafarer-logic/seafarer-display-columns.service';

@Component({
  selector: 'app-seafarer-emp-data',
  imports: [],
  templateUrl: './seafarer-emp-data.component.html',
  styleUrl: './seafarer-emp-data.component.css'
})
export class SeafarerEmpDataComponent {
  private readonly seafarersApiService = inject(SeafarersApiService)
  private readonly seafarerDisplayColumnsService = inject(SeafarerDisplayColumnsService)

  displayColumns!: seafarerDataColumn[];
  @Input() searchName : string = '';
  @Input() searchNationality: string = '';

  seafarerEmployeeData!: any[];
  filteredseafarerEmployeeData!: any[];
  employee !: ISeafarer[];

  ngOnInit(){
    this.getAllSeafarers();
          this.displayColumns = seafarerDisplayedColumns
          .filter(row => row.isVisible)
          .map(row=> ({
            id: row.id,
            databaseColumnName: row.databaseColumnName,
            displayedColumnName:row.displayedColumnName,
            isVisible: row.isVisible
          }))

      this.seafarerDisplayColumnsService.isColumnDisplay.subscribe({
        next:()=>{
           this.displayColumns = seafarerDisplayedColumns
          .filter(row => row.isVisible)
          .map(row=> ({
            id: row.id,
            databaseColumnName: row.databaseColumnName,
            displayedColumnName:row.displayedColumnName,
            isVisible: row.isVisible
          }))
        }
      })

  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['searchName'] && this.seafarerEmployeeData) {
      this.onSearchName();
    }
    if (changes['searchNationality'] && this.seafarerEmployeeData) {
      this.onSearchNationality();
    }
  console.log('CHANGES KEYS:', Object.keys(changes));

  }

  getAllSeafarers(){
    this.seafarersApiService.getAllSeafarers().subscribe({
      next:(data)=> {
          this.seafarerEmployeeData = data.Data;
          this.seafarerEmployeeData = data.Data
          this.filteredseafarerEmployeeData = this.seafarerEmployeeData;
          console.log(this.filteredseafarerEmployeeData);
      },
      error:(err)=> {
            console.log(err);
      },
    })
  }

  onSearchName(){
    this.filteredseafarerEmployeeData = this.seafarerEmployeeData;
    this.filteredseafarerEmployeeData = this.filteredseafarerEmployeeData.filter( (name)=>
      name.EmployeeName.toLowerCase().includes(this.searchName.toLowerCase())
    )
    console.log(this.filteredseafarerEmployeeData);
  }

  onSearchNationality(){
    this.filteredseafarerEmployeeData = this.seafarerEmployeeData;
    this.filteredseafarerEmployeeData = this.filteredseafarerEmployeeData.filter( (nationality)=>
      nationality.Nationality.toLowerCase().includes(this.searchNationality.toLowerCase())
    )
    console.log(this.filteredseafarerEmployeeData);
  }
}
