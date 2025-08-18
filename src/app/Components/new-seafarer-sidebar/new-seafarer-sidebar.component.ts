import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-new-seafarer-sidebar',
  imports: [],
  templateUrl: './new-seafarer-sidebar.component.html',
  styleUrl: './new-seafarer-sidebar.component.css'
})
export class NewSeafarerSidebarComponent {

  @Output() sideNavEvent = new EventEmitter<string>()

  onSideNav(sideNav: string){
    this.sideNavEvent.emit(sideNav)
  }
}
