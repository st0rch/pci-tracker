import { Component, OnInit, Input} from '@angular/core';
import {Popup} from 'ng2-opd-popup';
import {System} from '../Shared/system';
import { SystemStatusComponent } from '../system-status/system-status.component';


@Component({
  selector: 'app-systembutton',
  templateUrl: './systembutton.component.html',
  styleUrls: ['./systembutton.component.css']
})
export class SystembuttonComponent implements OnInit {

  constructor(private popup:Popup) { }
  
  @Input() systemInput: System;
  
  ClickButton(){
    this.popup.options={
      color:'red', widthProsentage: 400,
    }
    this.popup.show();}

  


  ngOnInit() {
  }
  

}
