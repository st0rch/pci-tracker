import { Component, OnInit, Input } from '@angular/core';
import { PciService } from '../Shared/pciservice';
import { MatDialog } from '@angular/material';
import { AmVersionDialogComponent } from '../am-version-dialog/am-version-dialog.component';
import { DecimalPipe } from '@angular/common';
import { count } from 'rxjs-compat/operator/count';
import { Colors } from '../Shared/Colors';
import { PieChartComponent } from '../pie-chart/pie-chart.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private pciService: PciService,
              public dialog: MatDialog,
              private decimalPipe: DecimalPipe) { }

  public green: number;
  public red: number;
  AMVersion: any;
  @Input('colorCounts') colorCounts: Colors;


  calculatePercent() {
    var math = this.green / this.red;
    var math2 = 100 - math;
    return math2
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(AmVersionDialogComponent, {
      panelClass: 'custom-dialog-container',
      data: {}
    });

    (<AmVersionDialogComponent>dialogRef.componentInstance).AMVersion = this.AMVersion;
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }


  ngOnInit() {
    this.pciService.getAMVersion()
    .subscribe((AMInfo) => {
     return this.AMVersion = AMInfo;
    });
    this.red = this.colorCounts.red;
    this.green = this.colorCounts.green;
    console.log(this.red);
  }

}
