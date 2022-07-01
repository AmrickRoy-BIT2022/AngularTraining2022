import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { DemoComponent } from './demo.component';
import { DemoRoutingModule } from './demo-routing.module';
import { MatTableExporterModule } from 'mat-table-exporter';


@NgModule({
  declarations: [DemoComponent],
  imports: [
    CommonModule,
    DemoRoutingModule,
    MatTableModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatRadioModule,
    MatButtonModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableExporterModule,
  ],
  exports: [
    CommonModule,
    MatTableModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatRadioModule,
    MatButtonModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatSortModule,
  ],
})
export class DemoModule {}
