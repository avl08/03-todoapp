import { createAction, props } from '@ngrx/store';

export const crear = createAction('[Counter Component] Crear todo', props<{texto:string}>());