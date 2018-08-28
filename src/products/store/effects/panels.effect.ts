import {Actions, Effect} from "@ngrx/effects";
import {Injectable} from "@angular/core";

import * as fromServices from '../../services';
import * as panelActions from '../actions/panels.action';
import { map, switchMap, catchError } from 'rxjs/operators';
import {of} from "rxjs/observable/of";

@Injectable()
export class PanelEffects {
  constructor(
    private actions$: Actions,
    private panelService: fromServices.PanelsService,
  ) {}

  @Effect()
  loadPanels$ = this.actions$
    .ofType(panelActions.LOAD_PANELS)
    .pipe(
      switchMap(() => {
        return this.panelService
          .getPanels()
          .pipe(
            map(panels => new panelActions.LoadPanelsSuccess(panels)),
            catchError(error => of(new panelActions.LoadPanelsFail(error))),
          )
      })
    )

  @Effect()
  loadWallet$ = this.actions$
    .ofType(panelActions.LOAD_WALLET)
    .pipe(
      switchMap(() => {
        return this.panelService
          .getWallet()
          .pipe(
            map(wallet => new panelActions.LoadWalletSuccess(wallet)),
            catchError(error => of(new panelActions.LoadPanelsFail(error))),
          )
      })
    )

}
