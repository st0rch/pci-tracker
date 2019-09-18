import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SystemStatusComponent } from './system-status/system-status.component';
import { SystemComponent } from './system/system.component';
import { HttpClientModule} from '@angular/common/http';
import 'rxjs/Rx';
import { PciService } from './Shared/pciservice';
import { DatePipe } from '@angular/common';
import {NgxPaginationModule} from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NoopAnimationsModule, BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {Ng2OrderModule} from 'ng2-order-pipe';
import { NgxSpinnerModule } from 'ngx-spinner';
import { SystemModalComponent } from './system-modal/system-modal.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogModule} from '@angular/material/dialog';
import { MyDialogComponent } from './my-dialog/my-dialog.component';
import { MatButtonModule, MatCardModule } from '@angular/material';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    SystemStatusComponent,
    SystemComponent,
    SystemModalComponent,
    MyDialogComponent,

  ],
  imports: [
    BrowserAnimationsModule,
    Ng2OrderModule,
    HttpClientModule,
    BrowserModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    NoopAnimationsModule,
    NgxSpinnerModule,
    MatDialogModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule
  ],
exports:[SystemComponent],
  entryComponents: [MyDialogComponent, SystemComponent],
  providers: [PciService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
