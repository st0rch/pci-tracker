import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { PciService } from './Shared/pciservice';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'PCI-TRACKER';

  pciData: any;
  page = 1;

  constructor(private spinner: NgxSpinnerService, private pciService: PciService) { }

  ngOnInit() {
    this.spinner.show();

    this.pciService.getPciInfo()
            .subscribe((pciInfo) => {
              this.spinner.hide();
              return this.pciData = pciInfo
            });
    }

}

