import { Component, OnInit, Injectable } from '@angular/core';
import { System } from '../Shared/system';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Ipcidata } from '../Shared/Ipcidata';
import { map, filter, switchMap } from 'rxjs/operators';



const SAMPLE_SYSTEMS = [
  {id: 1, machineName: 'DP1-304-044', isInCompliance: false, lastUpdated: '6/7/2017'},
  {id: 2, machineName: 'DP1-304-044', isInCompliance: true, lastUpdated: '6/7/2017'},
  {id: 3, machineName: 'DP1-304-044', isInCompliance: true, lastUpdated: '6/7/2017'},
  {id: 4, machineName: 'DP1-304-044', isInCompliance: true, lastUpdated: '6/7/2017'},

];

@Component({
  selector: 'app-system-status',
  templateUrl: './system-status.component.html',
  styleUrls: ['./system-status.component.css']
})

export class SystemStatusComponent implements OnInit {

  constructor() { }


  systemList: System[] = SAMPLE_SYSTEMS;

  ngOnInit() {
  }

}
