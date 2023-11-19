import {Component, EventEmitter, Output} from '@angular/core';
import { ApiService } from '../../../../service/api.service';
import { locale } from '../../../../shared/constatns/locations';
import { Location } from '../../../../shared/interfaces/locate';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import * as dayjs from 'dayjs'
import {ElementItem, Tours} from "../../../../shared/interfaces/searchItem";

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent {
  @Output() dataTours: EventEmitter<ElementItem[]> = new EventEmitter<ElementItem[]>();
  @Output() isLoadingData: EventEmitter<boolean> = new EventEmitter<boolean>();
  public localeItem: Location[] = locale;
  public trevaleType = [
    {
      value: "VILLA",
      text: "Villa",
    },
    {
      value: "CONDO_RESORT",
      text: "Condo Resort",
    },
    {
      value: "PENSION",
      text: "Pension",
    },
    {
      value: "TOWNHOUSE",
      text: "Townhouse",
    },
    {
      value: "AGRITOURISM",
      text: "Agritourism",
    },
    {
      value: "HOTEL_RESORT",
      text: "Hotel Resort",
    },
    {
      value: "HOLIDAY_PARK",
      text: "Holiday Park",
    },
    {
      value: "CONDO",
      text: "Condo",
    },
  ]
  public formSearch: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private api: ApiService
  ) {
    this.formSearch = this.formBuilder.group({
      destination: ['', [Validators.required]],
      date_start: ['', [Validators.required]],
      date_end: ['', [Validators.required]],
      travelType: ['', [Validators.required]],
    })
  }

  getSearch() {
    this.formSearch.markAllAsTouched();
    if (this.formSearch.invalid) {
      return;
    }
    this.isLoadingData.emit(true);
    const start = {
      day: Number(dayjs(this.formSearch.get('date_start')?.value).format('D')),
      month: Number(dayjs(this.formSearch.get('date_start')?.value).format('M')),
      year: Number(dayjs(this.formSearch.get('date_start')?.value).format('YYYY'))
    }
    const end = {
      day: Number(dayjs(this.formSearch.get('date_end')?.value).format('D')),
      month: Number(dayjs(this.formSearch.get('date_end')?.value).format('M')),
      year: Number(dayjs(this.formSearch.get('date_end')?.value).format('YYYY'))
    }

    const data = {
      currency: 'USD',
      eapid: 1,
      locale: this.formSearch.get('destination')?.value,
      siteId: 300000001,
      destination: { regionId: '6054439' },
      checkInDate: start,
      checkOutDate: end,
      rooms: [ { adults: 1 } ],
      resultsStartingIndex: 0,
      resultsSize: 200,
      sort: 'PRICE_LOW_TO_HIGH',
      filters: { price: { min: 100, max: 150 }, star: [ '50' ] }
    }
    this.api.getTours(data)
      .subscribe(
        (items: Tours): void => {
          this.dataTours.emit(items.tours);
          this.isLoadingData.emit(false);
        },
        (error) => {
          console.warn('Error this.api.getTours: ', error);
        }
    );
  }
}
