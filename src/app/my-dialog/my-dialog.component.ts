import { Component, OnInit, Input} from '@angular/core';
import { PciService } from '../Shared/pciservice';
import { DatePipe } from '@angular/common';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-my-dialog',
  templateUrl: './my-dialog.component.html',
  styleUrls: ['./my-dialog.component.css']
})
export class MyDialogComponent implements OnInit {
  Date = new Date();
  Date2 = new Date();
  fourWeeksAgo = this.Date.setDate(this.Date.getDate() - 30);
  TwoWeeksAgo = this.Date2.setDate(this.Date2.getDate() - 14);
  dateMinusMonth = this.datepipe.transform(this.fourWeeksAgo, 'MM-dd-yyyy');
  dateMinusTwoWeeks = this.datepipe.transform(this.TwoWeeksAgo, 'MM-dd-yyyy');
  constructor(public datepipe: DatePipe,
              public dialogRef: MatDialogRef<MyDialogComponent>,
              private pciService: PciService) { }

@Input() systemInput :any;
  close() {
    this.dialogRef.close();
  }

  deleteEntry(id) {
    this.pciService.deleteMachine(id).subscribe(
      () => console.log ('Employee with Id: ${systemInput.id} deleted'),
      (err) => console.log(err)
    );
  }


  dateCheck() {
    const latestDate = this.datepipe.transform(this.systemInput.UpdatedDate, 'MM-dd-yyyy');
    if (latestDate > this.dateMinusTwoWeeks) {
      return true; } else {return false; }
  }


  ngOnInit() {
  }

}
