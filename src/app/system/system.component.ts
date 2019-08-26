import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { System } from '../Shared/system';
import { Ipcidata } from '../Shared/iPCIDATA';
import { PciService } from '../Shared/pciservice';
import {Popup} from 'ng2-opd-popup';
import { bindCallback } from 'rxjs';
import { DatePipe } from '@angular/common';



@Component({
  selector: 'app-system',
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.css']
})
export class SystemComponent implements OnInit {

  pciData: Ipcidata[];
  Date = new Date();
  Date2 = new Date();
  fourWeeksAgo = this.Date.setDate(this.Date.getDate() - 30);
  TwoWeeksAgo = this.Date2.setDate(this.Date2.getDate() - 14);

  constructor(
    public datepipe: DatePipe,
    private pciService:PciService) { }


 
  dateMinusMonth = this.datepipe.transform(this.fourWeeksAgo,'MM-dd-yyyy');
  dateMinusTwoWeeks = this.datepipe.transform(this.TwoWeeksAgo,'MM-dd-yyyy');


  @Input() systemInput: any;
  @ViewChild('popup') popup: Popup;

  ClickButton(){
    this.popup.options={
    header: this.systemInput.hostname + " PCI CHECKLIST",
    widthProsentage: 300,
    cancleBtnContent: "EXIT",
    };
    this.popup.show(this.popup.options); }

  isValid(){
    const latest_date = this.datepipe.transform(this.systemInput.UpdatedDate, 'MM-dd-yyyy');
    if (latest_date > this.dateMinusTwoWeeks
    && this.systemInput.AMStatus == true
    && this.systemInput.BLStatus == true
    && this.systemInput.FirewallRullStatus == true
    && this.systemInput.FirewallContentStatus == true
    && this.systemInput.SCCMStatus == true
    && this.systemInput.MSBaselineStatus == true
    && this.systemInput.USBStatus == true
    ){return true }
    else if(latest_date > this.dateMinusMonth && latest_date < this.dateMinusTwoWeeks
      && this.systemInput.AMStatus == true
      && this.systemInput.BLStatus == true
      && this.systemInput.FirewallRullStatus == true
      && this.systemInput.FirewallContentStatus == true
      && this.systemInput.SCCMStatus == true
      && this.systemInput.MSBaselineStatus == true
      && this.systemInput.USBStatus == true
      ){return 'datewarning'; }
        else {return false}
    }


  ngOnInit() {
    this.pciService.getPciInfo()
            .subscribe((pciInfo)=> this.pciData = pciInfo);
    }
  }


