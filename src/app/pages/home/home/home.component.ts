import { Component, OnInit } from '@angular/core';
import { ElementItem } from '../../../shared/interfaces/searchItem';
import { Store, select } from '@ngrx/store';

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
}
