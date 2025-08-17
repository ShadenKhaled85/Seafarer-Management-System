import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { seafarerDisplayedColumns } from '../../Enums/SeafarerEnums';
import { seafarerDataColumn } from '../../Models/seafarerDataColumn';
import { SeafarerDisplayColumnsService } from '../../Core/Services/Seafarer-logic/seafarer-display-columns.service';

@Component({
  selector: 'app-display-columns',
  imports: [],
  templateUrl: './display-columns.component.html',
  styleUrl: './display-columns.component.css'
})
export class DisplayColumnsComponent implements OnInit {

  private readonly seafarerDisplayColumnsService = inject(SeafarerDisplayColumnsService)
  displayColumns!: seafarerDataColumn[];
  @Output() closeDisplayColumn = new EventEmitter();

  ngOnInit(){
    this.displayColumns = seafarerDisplayedColumns
  }

  onCheck(colId: number){
    const selectedColumn = seafarerDisplayedColumns.find(row=> row.id == colId)?.id!
    seafarerDisplayedColumns[selectedColumn].isVisible = !seafarerDisplayedColumns[selectedColumn].isVisible;
    this.seafarerDisplayColumnsService.changeColumnDisplay();
  }

  onCloseDisplayColumn(){
    this.closeDisplayColumn.emit(true);
  }



}
