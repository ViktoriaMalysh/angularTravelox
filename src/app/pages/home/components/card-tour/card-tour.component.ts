import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ElementItem } from '../../../../shared/interfaces/searchItem';

@Component({
  selector: 'app-card-tour',
  templateUrl: './card-tour.component.html',
  styleUrls: ['./card-tour.component.scss']
})
export class CardTourComponent {
  @Input() cardTour: any;
  @Output() openModal: EventEmitter<{name: string, price: string}> = new EventEmitter<{name: string, price: string}>();

  openBookingForm(name: string, price: string): void {
    this.openModal.emit({name, price});
  }
}
