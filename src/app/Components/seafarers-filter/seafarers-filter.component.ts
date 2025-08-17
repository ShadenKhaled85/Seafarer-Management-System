import { Component, Output, EventEmitter, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DisplayColumnsComponent } from "../display-columns/display-columns.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-seafarers-filter',
  imports: [FormsModule, DisplayColumnsComponent, RouterLink],
  templateUrl: './seafarers-filter.component.html',
  styleUrl: './seafarers-filter.component.css'
})
export class SeafarersFilterComponent {

  @Output() searchNameEvent = new EventEmitter();

  searchName : string = '';
  isShowDisplayColumns: boolean = false;
  @Output() searchNationalityEvent = new EventEmitter();
  searchNationality : string = '';
  showInput : boolean = false;

  onSearchName(){
    this.searchNameEvent.emit(this.searchName);
  }

  onToggleDisplayColumn(){
    this.isShowDisplayColumns = !this.isShowDisplayColumns;

  }
  onCloseDisplayColumn(){
    this.isShowDisplayColumns = false;
  }

  onSearchNationality(){
    this.searchNationalityEvent.emit(this.searchNationality);
  }

  toggleInput(){
    this.showInput = !this.showInput;
  }
}
