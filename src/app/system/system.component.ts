import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { System } from '../Shared/system';
import { Ipcidata } from '../Shared/iPCIDATA';
import { PciService } from '../Shared/pciservice';
import {Popup} from 'ng2-opd-popup';
import { bindCallback } from 'rxjs';


@Component({
  selector: 'app-system',
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.css']
})
export class SystemComponent implements OnInit {
  
  pciData: Ipcidata[];


  constructor(

    private _pciService:PciService
    ) { }

  color: string;
  buttonText: string; 

  @Input() systemInput: System;
  @ViewChild('popup') popup: Popup;

  ClickButton(){
    this.popup.options={
    header: this.systemInput.machineName + " COMPLIANCE CHECKLIST",
    widthProsentage: 300,
    cancleBtnContent: "EXIT",
    }
    this.popup.show(this.popup.options);}


  ngOnInit() {
    this.getMachineAction(this.systemInput.isInCompliance);
    this._pciService._getPciInfo()
            .subscribe((pciInfo)=> this.pciData = pciInfo);
  }



  getMachineAction(isInCompliance: boolean){
    if(isInCompliance){
      this.systemInput.isInCompliance = true;
      this.color = 'green';
    }
    else{
      this.systemInput.isInCompliance = false;
      this.color = 'red';
     // this.buttonText = 'checkcompliance';
    }
  }
}


