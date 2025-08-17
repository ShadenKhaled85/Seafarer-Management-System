import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewSeafarerSidebarComponent } from "../new-seafarer-sidebar/new-seafarer-sidebar.component";

@Component({
  selector: 'app-new-seafarer',
  imports: [RouterOutlet, NewSeafarerSidebarComponent],
  templateUrl: './new-seafarer.component.html',
  styleUrl: './new-seafarer.component.css'
})
export class NewSeafarerComponent {

}
