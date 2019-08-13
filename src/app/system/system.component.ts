import { Component, OnInit, Input} from '@angular/core';
import { System } from '../Shared/system';

@Component({
  selector: 'app-system',
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.css']
})
export class SystemComponent implements OnInit {

  constructor() { }

  @Input() systemInput: System;

  ngOnInit() {
  }

}
