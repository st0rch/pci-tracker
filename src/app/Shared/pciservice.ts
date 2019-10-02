import { Component, OnInit, Injectable } from '@angular/core';

import { Observable, BehaviorSubject } from 'rxjs';
import { Ipcidata } from './Ipcidata';
import { map, filter, switchMap, tap, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { AMVersion} from './iAMVersion';
import { count } from 'rxjs-compat/operator/count';
import { Colors } from './Colors';


@Injectable()
export class PciService implements OnInit {

  constructor(private httpClient: HttpClient,
              public datepipe: DatePipe) { }


public _counts: any;




Date = new Date();
Date2 = new Date();
fourWeeksAgo = this.Date.setDate(this.Date.getDate() - 30);
TwoWeeksAgo = this.Date2.setDate(this.Date2.getDate() - 14);
dateMinusMonth = Date.parse(this.datepipe.transform(this.fourWeeksAgo, 'MM-dd-yyyy'));
dateMinusTwoWeeks = Date.parse(this.datepipe.transform(this.TwoWeeksAgo, 'MM-dd-yyyy'));

baseurl: 'http://dr0-hlp-07/api/';
 postAmVersion(amVersionObject: AMVersion): Observable<AMVersion>{
 return this.httpClient.post<AMVersion>('http://dr0-hlp-07/api/AMVersion/', amVersionObject, {
   headers: new HttpHeaders({
     'Content-Type': 'application/json'
   })
 });
}

  deleteAMVersion(id: number): Observable<void> {
  return this.httpClient.delete<void>('http://dr0-hlp-07/api/AMVersion/' + id)};

  deleteMachine(id: number): Observable<void> {
  return this.httpClient.delete<void>('http://dr0-hlp-07/api/PCIMachines/' + id)};


  getAMVersion(): Observable <AMVersion[]> {
 return this.httpClient.get<AMVersion[]>('http://dr0-hlp-07/api/AMVersion')
  }


  getPciInfo(): Observable <{ sorted: Ipcidata[], counts: Colors }>  {
    return this.httpClient.get<Ipcidata[]>('http://dr0-hlp-07/api/PCIMachines')
      .pipe(
              map(results => {

                const sorted = results.sort(( a, b ) => {
                      const updateDateA = Date.parse(this.datepipe.transform(a.UpdatedDate, 'MM-dd-yyyy'));
                      const carda = determineCardType(a, this.dateMinusMonth, this.dateMinusTwoWeeks);
                      const cardb = determineCardType(b, this.dateMinusMonth, this.dateMinusTwoWeeks);

                      return cardb - carda;
                });

                const _counts = sorted.reduce((acc, cur)=>{
                  const cardType = determineCardType(cur, this.dateMinusMonth, this.dateMinusTwoWeeks);

                  switch (cardType) {
                    case 1:
                      acc.green += 1;
                      break;
                    case 2:
                      acc.yellow += 1;
                      break;
                    case 3:
                      acc.red += 1;
                      break;
                  }
                  return acc;
                }, {
                  red: 0,
                  green: 0,
                  yellow: 0
                });
                console.log(_counts);
                console.log(_counts.red);
                return ({sorted, counts: _counts});
          }

    ));
  }
  ngOnInit() {}
}

const everythingTrueInX = (x) => {
  return x.AMStatus &&
        x.BLStatus &&
        x.FirewallRuleStatus &&
        x.FirewallContentStatus &&
        x.SCCMStatus &&
        x.MSBaselineStatus &&
        x.USBStatus;
};

const determineCardType = (card, monthAgo, weeksAgo) => {
  const ValsTrue = everythingTrueInX(card);
  let cardType = 1;

// 1-green
// 2-yellow
// 3- red
  if (ValsTrue){
    if ((monthAgo < Date.parse(card.UpdatedDate) && weeksAgo >= Date.parse(card.UpdatedDate)) || monthAgo > Date.parse(card.UpdatedDate) ) {
      cardType = 2;
    }
  } else {
    cardType = 3;
  }
  return cardType;
};