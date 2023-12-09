import { Component, OnInit } from '@angular/core';
import { ElementItem } from '../../../shared/interfaces/searchItem';
import { Store, select } from '@ngrx/store';
import { MatDialog } from '@angular/material/dialog';

import { FormBookingComponent } from '../components/form-booking/form-booking.component';
import { CongratulationsComponent } from '../components/congratulations/congratulations.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public pageSizeOptions: number[] = [10, 20, 50, 100];
  public pageSize: number = 10;
  public pageIndex: number = 0;
  public pageLength: number = 0;
  public isLoading: boolean = false;
  public paginateData: ElementItem[] = [];
  private resultSearch: ElementItem[] = [];
  constructor(
    public dialog: MatDialog,
    private store: Store<{ tours: any[] }>
  ) { }

  ngOnInit(): void {
  }

  getToursData() {
    this.store.pipe(select('tours')).subscribe(
      (data: any): void => {
        if (data.result?.tours) {
          this.isLoading = false;
          this.resultSearch = data.result.tours;
          this.pageLength = this.resultSearch.length;
          this.updateDataSource();
        }
      }
    );
  }

  startLoader(value: boolean) {
    this.isLoading = value;
  }

  handlePageChange(event: any): void {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.updateDataSource();
  }

  updateDataSource(): void {
    this.paginateData = this.resultSearch.slice(this.pageIndex * this.pageSize, (this.pageIndex + 1) * this.pageSize)
  }

  openBookingModal(dataSource: {name: string, price: string}): void {
    console.info('data', dataSource);
    // console.info('price', price);
    const dialogRef = this.dialog.open(
      FormBookingComponent, {data: dataSource}
    );
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      if (result.status === 'error') {
        return;
      }
      this.dialog.open(CongratulationsComponent, {data: result.data});
    });
  }
}
