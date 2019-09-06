import { Component, OnInit, Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Ipcidata } from '../Shared/Ipcidata';
import { map, filter, switchMap } from 'rxjs/operators';
import { PciService } from '../Shared/pciservice';


@Component({
  selector: 'app-system-status',
  templateUrl: './system-status.component.html',
  styleUrls: ['./system-status.component.css']
})

export class SystemStatusComponent implements OnInit {

  constructor(private pciService: PciService) { };
  p: number;
  systemList: any;

  ngOnInit() {this.pciService.getPciInfo().subscribe(x => this.systemList = x);


  }
}
