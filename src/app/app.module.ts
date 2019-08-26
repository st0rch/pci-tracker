import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SystemStatusComponent } from './system-status/system-status.component';
import { SystemComponent } from './system/system.component';
import { HttpClientModule} from '@angular/common/http';
import { HttpModule } from '@angular/http';
import 'rxjs/Rx';
import { PciService } from './Shared/pciservice';
import {PopupModule} from 'ng2-opd-popup';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    SystemStatusComponent,
    SystemComponent,
  ],
  imports: [
    HttpModule,
    HttpClientModule,
    BrowserModule,
    PopupModule.forRoot(),
  ],
  providers: [PciService,DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
