import { Component, OnInit } from '@angular/core';
import {System} from '../Shared/system';

const SAMPLE_SYSTEMS = [
  {id: 1, machineName: 'DP1-304-044', isInCompliance: true},
  {id: 2, machineName: 'DP1-304-044', isInCompliance: false},
  {id: 3, machineName: 'DP1-304-044', isInCompliance: true},
  {id: 4, machineName: 'DP1-304-044', isInCompliance: true},
  {id: 1, machineName: 'DP1-304-044', isInCompliance: true},
  {id: 2, machineName: 'DP1-304-044', isInCompliance: false},
  {id: 3, machineName: 'DP1-304-044', isInCompliance: true},
  {id: 4, machineName: 'DP1-304-044', isInCompliance: true},
  {id: 1, machineName: 'DP1-304-044', isInCompliance: true},
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