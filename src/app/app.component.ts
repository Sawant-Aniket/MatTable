import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {MatTable, MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';

export interface PeriodicElement {
  date: any;
  allocatedSingle: number;
  usedSingle: number;
  availableSingle: number;
  rateSingle: number;
  allocatedDouble: number;
  usedDouble: number;
  availableDouble: number;
  rateDouble: number;
  currency: string;
}



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatTableModule,MatButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  displayedColumns: any[] = ['date', 'allocatedSingle', 'usedSingle', 'availableSingle','rateSingle','allocatedDouble','usedDouble','availableDouble','rateDouble','currency'];
  dataSource = [
    {date: 2, allocatedSingle: 5, usedSingle: 4.0026, availableSingle:4 ,rateSingle: 21,allocatedDouble:6,usedDouble:3,availableDouble:3,rateDouble:300,currency:"usd"},
    {date: 1, allocatedSingle: 4, usedSingle: 1.0079, availableSingle: 4,rateSingle: 21,allocatedDouble:6,usedDouble:3,availableDouble:3,rateDouble:300,currency:"usd"},
    {date: 3, allocatedSingle: 3, usedSingle: 6.941, availableSingle: 3,rateSingle: 21,allocatedDouble:6,usedDouble:3,availableDouble:3,rateDouble:300,currency:"usd"},
    {date: 4, allocatedSingle: 3, usedSingle: 9.0122, availableSingle: 5,rateSingle: 21,allocatedDouble:6,usedDouble:3,availableDouble:3,rateDouble:300,currency:"usd"},
    {date: 5, allocatedSingle: 2, usedSingle: 10.811, availableSingle: 3,rateSingle: 21,allocatedDouble:6,usedDouble:3,availableDouble:3,rateDouble:300,currency:"usd"},
    {date: 6, allocatedSingle: 5, usedSingle: 12.0107, availableSingle: 2,rateSingle: 21,allocatedDouble:6,usedDouble:3,availableDouble:3,rateDouble:300,currency:"usd"},
    {date: 7, allocatedSingle: 4, usedSingle: 14.0067, availableSingle: 4,rateSingle: 21,allocatedDouble:6,usedDouble:3,availableDouble:3,rateDouble:300,currency:"usd"},
    {date: 8, allocatedSingle: 6, usedSingle: 15.9994, availableSingle: 5,rateSingle: 21,allocatedDouble:6,usedDouble:3,availableDouble:3,rateDouble:300,currency:"usd"},
    {date: 9, allocatedSingle: 6, usedSingle: 18.9984, availableSingle: 5,rateSingle: 21,allocatedDouble:6,usedDouble:3,availableDouble:3,rateDouble:300,currency:"usd"},
    {date: 10,allocatedSingle: 6, usedSingle: 20.1797, availableSingle: 5,rateSingle: 21,allocatedDouble:6,usedDouble:3,availableDouble:3,rateDouble:300,currency:"usd"},
  ];

  @ViewChild(MatTable)
  table!: MatTable<PeriodicElement>;
  title: any;

  // addData() {
  //   const randomElementIndex = Math.floor(Math.random() * ELEMENT_DATA.length);
  //   this.dataSource.push(ELEMENT_DATA[randomElementIndex]);
  //   this.table.renderRows();
  // }

  removeData() {
    this.dataSource.pop();
    this.table.renderRows();
  }
}
