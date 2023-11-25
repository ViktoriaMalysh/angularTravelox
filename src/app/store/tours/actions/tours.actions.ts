import { createAction, props } from '@ngrx/store';

export const loadTours = createAction('[Tours] Load Tours', props<{ data: any }>());
export const toursLoaded = createAction('[Tours] Tours Loaded', props<{ result: any }>());
export const toursLoadError = createAction('[Tours] Tours Load Error', props<{ error: any }>());
