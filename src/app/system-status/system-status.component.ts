import { Component, OnInit, Injectable, Input, OnChanges, AfterContentInit, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Ipcidata } from '../Shared/Ipcidata';
import { map, filter, switchMap } from 'rxjs/operators';
import { Ng2SearchPipeModule } from 'ng2-search-filter';




@Component({
  selector: 'app-system-status',
  templateUrl: './system-status.component.html',
  styleUrls: ['./system-status.component.css'],
})

export class SystemStatusComponent implements OnChanges {

  @Input() pciData: any;

  p: number;

  searchText = '';
  filteredValues: any = [];

  ngOnChanges(): void {
    this.filteredValues = this.pciData;
  }

  filterResults() {
      this.filteredValues = this.pciData.filter(x => x.hostname.toLowerCase().includes(this.searchText.toLowerCase()));
  }
}
