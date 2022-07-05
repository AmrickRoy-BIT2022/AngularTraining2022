import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './layouts/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RxjsComponent } from './layouts/rxjs/rxjs.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SubjectComponent } from './layouts/subject/subject.component';
import { PermissionListComponent } from './layouts/permission-list/permission-list.component';
import { MatRadioModule } from '@angular/material/radio';
// import { NgxStarRatingModule } from 'ngx-star-rating';
import { SelectionComponent } from './layouts/selection/selection.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import * as CanvasJSAngularChart from '../lib/canvasjs.angular.component';
import { LineChartComponent } from './layouts/line-chart/line-chart.component';
import { UploadComponent } from './layouts/upload/upload.component';
import {MatCardModule} from '@angular/material/card';
import { HolidayListComponent } from './layouts/holiday-list/holiday-list.component';
import { YouTubePlayerModule } from '@angular/youtube-player';
var CanvasJSChart = CanvasJSAngularChart.CanvasJSChart;
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RxjsComponent,
    SubjectComponent,
    PermissionListComponent,
    SelectionComponent,
    CanvasJSChart,
    LineChartComponent,
    UploadComponent,
    HolidayListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule, 
    BrowserAnimationsModule,
    MatRadioModule,
    MatCardModule,
    // NgxStarRatingModule,
    NgMultiSelectDropDownModule.forRoot(),
    YouTubePlayerModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
