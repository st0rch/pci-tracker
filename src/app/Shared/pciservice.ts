import { Component, OnInit, Injectable } from '@angular/core';
import {System} from './system';
import { Observable } from 'rxjs';
import { Ipcidata } from './Ipcidata';
import { map, filter, switchMap, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';


@Injectable()
export class PciService implements OnInit {

  constructor(private httpClient: HttpClient,
              public datepipe: DatePipe) { }


Date = new Date();
Date2 = new Date();
fourWeeksAgo = this.Date.setDate(this.Date.getDate() - 30);
TwoWeeksAgo = this.Date2.setDate(this.Date2.getDate() - 14);
dateMinusMonth = Date.parse(this.datepipe.transform(this.fourWeeksAgo, 'MM-dd-yyyy'));
dateMinusTwoWeeks = Date.parse(this.datepipe.transform(this.TwoWeeksAgo, 'MM-dd-yyyy'));

baseurl: 'http://dr0-hlp-07/api/';

  deleteMachine(id: number): Observable<void> {
  return this.httpClient.delete<void>('http://dr0-hlp-07/api/PCIMachines/' + id)};

  getPciInfo(): Observable <Ipcidata[]> {
    return this.httpClient.get<Ipcidata[]>('http://dr0-hlp-07/api/PCIMachines')
      .pipe(
              map(results => results.sort(( a, b ) => {
                const updateDateA = Date.parse(this.datepipe.transform(a.UpdatedDate, 'MM-dd-yyyy'));
                const carda = determineCardType(a, this.dateMinusMonth, this.dateMinusTwoWeeks)
                const cardb = determineCardType(b, this.dateMinusMonth, this.dateMinusTwoWeeks)
                if(a.hostname === 'DP1-321-197') {
                  console.log(carda, cardb)
                }
                 return cardb - carda
            })
    ));
  }

  ngOnInit() {
  }

}

const everythingTrueInX = (x) => {
  return x.AMStatus && 
        x.BLStatus && 
        x.FirewallRuleStatus && 
        x.FirewallContentStatus && 
        x.SCCMStatus && 
        x.MSBaselineStatus && 
        x.USBStatus;
}

const determineCardType = (card, monthAgo, weeksAgo) => {

  const ValsTrue = everythingTrueInX(card)
  let cardType = 1;
// 1-green
// 2-yellow
// 3- red
  if(ValsTrue){
    if((monthAgo < Date.parse(card.UpdatedDate) && weeksAgo >= Date.parse(card.UpdatedDate)) || monthAgo > Date.parse(card.UpdatedDate) ) {
      cardType = 2
    }
  } else {
    cardType = 3
  }
  return cardType
}