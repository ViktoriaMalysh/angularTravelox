import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import * as TourActions from '../actions/tours.actions';
import { ApiService } from '../../../service/api.service';

@Injectable()
export class TourEffects {
  loadTours$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TourActions.loadTours),
      mergeMap((action) =>
        this.apiService.getTours(action.data).pipe(
          map((result) => TourActions.toursLoaded({ result })),
          catchError((error) => of(TourActions.toursLoadError({ error })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private apiService: ApiService) {}
}
