import { Component, OnInit, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import {NgForm, FormBuilder, FormControl, FormGroup} from '@angular/forms'
import { AMVersion } from '../Shared/iAMVersion';
import { PciService } from '../Shared/pciservice';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-am-version-dialog',
  templateUrl: './am-version-dialog.component.html',
  styleUrls: ['./am-version-dialog.component.css']
})
export class AmVersionDialogComponent implements OnInit {

  versionForm: FormGroup;
  formdata: AMVersion;
  jsonData: any;
  constructor(
    private httpclient: HttpClient,
    private fb: FormBuilder,
    private pciservice: PciService,
    public dialogRef: MatDialogRef<AmVersionDialogComponent>
    ) { }

  @Input() AMVersion: any;


  onSubmit(): void{
    this.formdata = this.versionForm.value;
    this.jsonData = JSON.stringify(this.formdata);
    this.pciservice.postAmVersion(this.jsonData).subscribe((err) => console.log(err));
  }


  deleteEntry(id) {
    this.pciservice.deleteAMVersion(id).subscribe(
      () => console.log ('Version with Id: ${AMversion.id} deleted'),
      (err) => console.log(err)
    );
  }

  close() {
    this.dialogRef.close();
  }

  ngOnInit() {
    this.versionForm = this.fb.group({      AMEngineVersion: ['Enter Engine Version'],
    AMProductVersion: ['Enter Product Version'],
    active: ['1']});

  }

}
