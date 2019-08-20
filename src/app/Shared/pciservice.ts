import { Component, OnInit, Injectable } from '@angular/core';
import {System} from './system';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Ipcidata } from './Ipcidata';
import { map, filter, switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';



@Injectable()
export class PciService implements OnInit {

  constructor(private httpClient: HttpClient) { }

  getPciInfo(): Observable <Ipcidata[]> {
    return this.httpClient.get<Ipcidata[]>('http://localhost:499/api/PCImachines');
  }

  ngOnInit() {
  }

}
