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
import {NgxPaginationModule} from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter'; //importing the module
import { CardComponent } from './card/card.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {Ng2OrderModule} from 'ng2-order-pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    SystemStatusComponent,
    SystemComponent,
    CardComponent,
  ],
  imports: [
    Ng2OrderModule,
    HttpModule,
    HttpClientModule,
    BrowserModule,
    NgxPaginationModule,
    PopupModule.forRoot(),
    Ng2SearchPipeModule,
    NoopAnimationsModule
  ],
  providers: [PciService,DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
