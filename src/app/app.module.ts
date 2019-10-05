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
import { DatePipe, DecimalPipe } from '@angular/common';
import {NgxPaginationModule} from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NoopAnimationsModule, BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {Ng2OrderModule} from 'ng2-order-pipe';
import { NgxSpinnerModule } from 'ngx-spinner';
import { MatDialogModule} from '@angular/material/dialog';
import { MyDialogComponent } from './my-dialog/my-dialog.component';
import { MatButtonModule, MatCardModule } from '@angular/material';
import { AmVersionDialogComponent } from './am-version-dialog/am-version-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { FilterPipe } from './filter.pipe';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    SystemStatusComponent,
    SystemComponent,
    MyDialogComponent,
    AmVersionDialogComponent,
    PieChartComponent,
    FilterPipe,

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
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule,
  ],
exports: [SystemComponent],
  entryComponents: [MyDialogComponent, AmVersionDialogComponent, SystemComponent],
  providers: [PciService, DatePipe, DecimalPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
