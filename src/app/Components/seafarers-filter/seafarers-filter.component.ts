import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DisplayColumnsComponent } from "../display-columns/display-columns.component";
import { NewSeafarerComponent } from "../new-seafarer/new-seafarer.component";

@Component({
  selector: 'app-seafarers-filter',
  imports: [FormsModule, DisplayColumnsComponent, NewSeafarerComponent],
  templateUrl: './seafarers-filter.component.html',
  styleUrl: './seafarers-filter.component.css'
})
export class SeafarersFilterComponent {

  @Output() searchNameEvent = new EventEmitter();
  @Output() searchNationalityEvent = new EventEmitter();

  searchName : string = '';
  searchNationality : string = '';
  isShowDisplayColumns: boolean = false;
  showInput : boolean = false;
  isToggleAddSeafarer : boolean = false;

  onToggleAddSeafarer(){
    this.isToggleAddSeafarer = !this.isToggleAddSeafarer;
  }
  onSearchName(){
    this.searchNameEvent.emit(this.searchName);
  }

  onToggleDisplayColumn(){
    this.isShowDisplayColumns = !this.isShowDisplayColumns;
  }

  onSearchNationality(){
    this.searchNationalityEvent.emit(this.searchNationality);
  }

  onCloseAddSeafarer(){
    this.isToggleAddSeafarer = false;
  }

  onCloseDisplayColumn(){
    this.isShowDisplayColumns = false;
  }


  toggleInput(){
    this.showInput = !this.showInput;
  }
}
