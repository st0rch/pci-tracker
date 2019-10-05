import { Component, OnInit, Injectable, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Ipcidata } from '../Shared/Ipcidata';
import { map, filter, switchMap } from 'rxjs/operators';
import { Ng2SearchPipeModule } from 'ng2-search-filter';




@Component({
  selector: 'app-system-status',
  templateUrl: './system-status.component.html',
  styleUrls: ['./system-status.component.css'],
})

export class SystemStatusComponent implements OnInit {


  @Input() pciData: any;



constructor() {}
  searchText;
  p: number;
  filteredValues : any;

  ngOnInit() {

  }
}
