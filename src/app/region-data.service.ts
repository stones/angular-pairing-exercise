import { Injectable } from "@angular/core";
import { of } from "rxjs";

@Injectable({providedIn: 'root'})
export class RegionDataService{

  getRegionIdByName( _regionName: string) {
    return of('melbourne-axf')
  }
}