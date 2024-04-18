import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class RegionDataService {
  getRegionIdByName(regionName: string) {
    return of(`${regionName}-axf`);
  }
}
