import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { PciService } from './Shared/pciservice';
import {MatDialogModule} from '@angular/material/dialog';
import {Howl, Howler} from 'howler';
import { Colors } from './Shared/Colors';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  title = 'PCI-TRACKER';

  AMVersion: any;
  pciData: any;
  page = 1;
  colorCounts: Colors;



  constructor(private spinner: NgxSpinnerService, private pciService: PciService) { }

  ngOnInit() {
    this.spinner.show();


    this.pciService.getPciInfo()
            .subscribe((pciInfo) => {
              this.spinner.hide();
              this.pciData = pciInfo.sorted,
              this.colorCounts = pciInfo.counts;
            });


    }

}

