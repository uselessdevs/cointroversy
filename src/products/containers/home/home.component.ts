import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators/map';
import * as fromStore from '../../store';
import * as fromRoot from '../../../app/store';
import {Panel} from "../../models/panel.model";


@Component({
  selector: 'home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['home.component.scss'],
  template: `
    {{(panels$ | async) | json }}
  `,
})
export class HomeComponent implements OnInit {

  panels$: Observable<Panel[]>;

  constructor(
    private store: Store<fromStore.ProductsState>
  ) {

  }

  ngOnInit() {
    this.panels$ = this.store.select(fromStore.getAllPanels);
  }


}
