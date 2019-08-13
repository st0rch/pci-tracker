import { Component, OnInit, Input} from '@angular/core';
import { System } from '../Shared/system';
import { Ipcidata } from '../Shared/iPCIDATA';
import { PciService } from '../Shared/pciservice';

@Component({
  selector: 'app-system',
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.css']
})
export class SystemComponent implements OnInit {

  pciData: Ipcidata[];

  constructor(

    private _pciService:PciService) { }

  color: string;
  buttonText: string; 

  @Input() systemInput: System;



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


