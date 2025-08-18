import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-new-seafarer-sidebar',
  imports: [],
  templateUrl: './new-seafarer-sidebar.component.html',
  styleUrl: './new-seafarer-sidebar.component.css'
})
export class NewSeafarerSidebarComponent {

  @Output() sideNavEvent = new EventEmitter<string>()

  defaultSideNav!: string;

  ngOnInit(){
    this.defaultSideNav = 'personalData'
    this.sideNavEvent.emit(this.defaultSideNav)

  }
  onSideNav(sideNav: string){
    this.sideNavEvent.emit(sideNav)
  }
}
