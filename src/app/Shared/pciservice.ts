import { Component, OnInit, Injectable } from '@angular/core';
import {System} from './system';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Ipcidata } from './Ipcidata';
import { map, filter, switchMap } from 'rxjs/operators';



@Injectable()
export class PciService implements OnInit {

  constructor(private _http: Http) { }


  _getPciInfo(): Observable <Ipcidata[]> {
    return this._http.get('http://localhost:499/api/PCImachines')
              .map((response: Response)=> <Ipcidata[]>response.json())
  }

  ngOnInit() {
  }

}
