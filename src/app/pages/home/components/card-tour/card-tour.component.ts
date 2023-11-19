import { Component, Input } from '@angular/core';
import { ElementItem } from '../../../../shared/interfaces/searchItem';

@Component({
  selector: 'app-card-tour',
  templateUrl: './card-tour.component.html',
  styleUrls: ['./card-tour.component.scss']
})
export class CardTourComponent {
  @Input() cardTour?: ElementItem;
}
