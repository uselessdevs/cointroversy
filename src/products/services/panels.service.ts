
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {AngularFirestore} from "angularfire2/firestore";
import {Observable} from "rxjs/Observable";
import {MOCKED_PANEL_LIST, Panel} from "../models/panel.model";
import {of} from "rxjs/observable/of";
import {catchError} from "rxjs/operators";
import {Web3Service} from "./web3.service";

@Injectable()
export class PanelsService {
  constructor(
    private http: HttpClient,
    private afs: AngularFirestore,
    private web3Service: Web3Service,
  ) {
    afs.firestore.settings({ timestampsInSnapshots: true });
  }

  getWallet(): Observable<any> {
    return this.web3Service.getAccounts();
  }

  getPanels(): Observable<Panel[]> {

    return of(MOCKED_PANEL_LIST).pipe(catchError((error: any) => Observable.throw(error.json())));
  }
}
