import { Component, OnInit, Injectable, Input } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Ipcidata } from '../Shared/Ipcidata';
import { map, filter, switchMap } from 'rxjs/operators';
// import { PciService } from '../Shared/pciservice';


@Component({
  selector: 'app-system-status',
  templateUrl: './system-status.component.html',
  styleUrls: ['./system-status.component.css']
})

export class SystemStatusComponent implements OnInit {


  @Input() pciData: any;


  // filteredInput = null;
  // constructor(private pciService: PciService) {};

  p: number;
  systemList: any;

  // values = '';

  // onKey(event: any) {
  //   this.values = event.target.value;
  //   console.log(this.values)
  // }

  ngOnInit() {
    // this.pciService.getPciInfo().subscribe(x => this.systemList = x);
  }
}
