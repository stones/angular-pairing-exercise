import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AgnetDataService {
  //This is intended to mock an api call
  getRegionAgents(regionId: string) {
    return of({
      Results: this.getResultsByCode(regionId),
    });
  }
  private getResultsByCode(regionId: string) {
    switch (regionId) {
      case 'sydney-axf':
        return sydneyResults;
      default:
        return melbourneResults;
    }
  }
}
const sydneyResults = [
  {
    Name: 'Henry McCoy',
    IsAwardWinner: false,
    Agency: {
      Name: 'The fancy sydney agency company',
    },
    Theme: {
      AvatarImage: 'pick any image to use as an avatar',
    },
    AverageSalePrice: 502664.13,
    SoldProperties: 52,
    TotalReviews: 12,
    StarRating: 4.0,
  },
  {
    Name: 'Cain Marko',
    IsAwardWinner: true,
    Agency: {
      Name: 'A fancier agency',
    },
    Theme: {
      AvatarImage: 'pick any image to use as an avatar',
    },
    AverageSalePrice: 627586.74,
    SoldProperties: 6,
    TotalReviews: 401,
    StarRating: 5.0,
  },
];

const melbourneResults = [
  {
    Name: 'Sebastian Shaw',
    IsAwardWinner: false,
    Agency: {
      Name: 'The fancy agency company',
    },
    Theme: {
      AvatarImage: 'pick any image to use as an avatar',
    },
    AverageSalePrice: 802664.13,
    SoldProperties: 192,
    TotalReviews: 0,
    StarRating: 2.0,
  },
  {
    Name: 'Nathaniel Essex',
    IsAwardWinner: true,
    Agency: {
      Name: 'A fancier agency',
    },
    Theme: {
      AvatarImage: 'pick any image to use as an avatar',
    },
    AverageSalePrice: 627586.74,
    SoldProperties: 125,
    TotalReviews: 174,
    StarRating: 5.0,
  },
];
