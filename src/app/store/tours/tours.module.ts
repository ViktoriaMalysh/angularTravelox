import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { tourReducer } from './reducers/tours.reducer';
import { TourEffects } from './effects/tours.effects';

@NgModule({
  imports: [
    StoreModule.forFeature('tours', tourReducer),
    EffectsModule.forFeature([TourEffects]),
  ],
})
export class ToursModule { }
