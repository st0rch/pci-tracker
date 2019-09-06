import { Component, OnInit, Injectable } from '@angular/core';
import {System} from './system';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Ipcidata } from './Ipcidata';
import { map, filter, switchMap, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DatePipe } from '@angular/common';


@Injectable()
export class PciService implements OnInit {

  constructor(private httpClient: HttpClient,
              public datepipe: DatePipe) { }


  getPciInfo(): Observable <Ipcidata[]> {
    return this.httpClient.get<Ipcidata[]>('http://dr0-hlp-07/api/PCImachines').pipe(
      map(results => results.sort(( a, b ) => {
        if ( b.AMStatus
          && b.BLStatus
          && b.FirewallRuleStatus
          && b.FirewallContentStatus
          && b.SCCMStatus
          && b.MSBaselineStatus
          && b.USBStatus
          ) {
        return -1;
        } else if (b.AMStatus
          && b.BLStatus
          && b.FirewallRuleStatus
          && b.FirewallContentStatus
          && b.SCCMStatus
          && b.MSBaselineStatus
          && b.USBStatus
          ) {return 0; } else {return 1; }
    })));
  }

  ngOnInit() {
  }

}
