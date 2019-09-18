import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { System } from '../Shared/system';
import { Ipcidata } from '../Shared/iPCIDATA';
import { PciService } from '../Shared/pciservice';
import { bindCallback } from 'rxjs';
import { DatePipe } from '@angular/common';
import { MatDialog } from '@angular/material';
import { MyDialogComponent } from '../my-dialog/my-dialog.component';

@Component({
  selector: 'app-system',
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.css']
})
export class SystemComponent implements OnInit {

  // Date variables declared for component functions
  pciData: Ipcidata[];
  Date = new Date();
  Date2 = new Date();
  fourWeeksAgo = this.Date.setDate(this.Date.getDate() - 30);
  TwoWeeksAgo = this.Date2.setDate(this.Date2.getDate() - 14);
  dateMinusMonth = this.datepipe.transform(this.fourWeeksAgo, 'MM-dd-yyyy');
  dateMinusTwoWeeks = this.datepipe.transform(this.TwoWeeksAgo, 'MM-dd-yyyy');

  // creating a datepipe and PciService object to be used in the component in the constructor
  constructor(
    public dialog: MatDialog,
    public datepipe: DatePipe,
    private pciService: PciService,
    ) { }

  // Configuration for the popup display box that appears on button press
  count: number;
  notValid: number;
  @Input() systemInput: any;


  // Button that displays popup and popup options
  openDialog(): void {
    const dialogRef = this.dialog.open(MyDialogComponent, {
      panelClass: 'custom-dialog-container',
      width: '400px',
      data: {}
    });

    (<MyDialogComponent>dialogRef.componentInstance).systemInput = this.systemInput;
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  isValid() {
    const latestDate = this.datepipe.transform(this.systemInput.UpdatedDate, 'MM-dd-yyyy');
    if (
    latestDate >= this.dateMinusTwoWeeks
    && this.systemInput.AMStatus
    && this.systemInput.BLStatus
    && this.systemInput.FirewallRuleStatus
    && this.systemInput.FirewallContentStatus
    && this.systemInput.SCCMStatus
    && this.systemInput.MSBaselineStatus
    && this.systemInput.USBStatus
    ) {return true; } else if (
      latestDate > this.dateMinusMonth && latestDate < this.dateMinusTwoWeeks
      && this.systemInput.AMStatus
      && this.systemInput.BLStatus
      && this.systemInput.FirewallRuleStatus
      && this.systemInput.FirewallContentStatus
      && this.systemInput.SCCMStatus
      && this.systemInput.MSBaselineStatus
      && this.systemInput.USBStatus
      ) {return 'datewarning'; }
      else {return false}
    }

  // Subscribes to observable to get the pciData information
    ngOnInit() {
      // this.pciService.getPciInfo()
      //       .subscribe((pciInfo) => this.pciData = pciInfo);
    }
  }


