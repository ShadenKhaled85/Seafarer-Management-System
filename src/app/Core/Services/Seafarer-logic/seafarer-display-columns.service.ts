import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SeafarerDisplayColumnsService {

  private $isColumnDisplay = new BehaviorSubject<boolean>(false);
  private $isNewForm = new BehaviorSubject<boolean>(false)

  constructor() { }

  changeColumnDisplay(){
    this.$isColumnDisplay.next(true)
  }

  get isColumnDisplay(){
    return this.$isColumnDisplay
  }


  changeIsNewForm(){
    this.$isNewForm.next(true)
  }

  get isNewForm(){
    return this.$isNewForm
  }



}
