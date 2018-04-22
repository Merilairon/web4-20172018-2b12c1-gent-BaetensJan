import { Component } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {map} from "rxjs/operators";
import {Station} from "./station/Station.model";
import {StationDataService} from "./station/station-data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private _stationDataService : StationDataService){}

  get stations(): Observable<Station[]> {
    return this._stationDataService.stations;
  }

  addNewStation(station) {
    return this._stationDataService.addNewStation(station)
  }
  /*
    getRecipe(naam: string): Observable<Station> {
      return this.http
        .get(`${this._appUrl}/station/${naam}`)
        .pipe(map(Station.fromJSON));
    }
    */
}

