import { Injectable } from "@angular/core";
import { of } from "rxjs";

@Injectable({providedIn: 'root'})
export class AgnetDataService{

  getRegionAgents( regionId: string) {
    return of({"Results":[
      {
         "Name":"Bon Jovi",
         "IsAwardWinner":false,
         "Agency":{
            "Name":"The fancy agency company"
         },
         "Theme":{
            "AvatarImage":"pick any image to use as an avatar"
         },
         "AverageSalePrice":502664.13,
         "SoldProperties":152,
         "TotalReviews":0,
         "StarRating":1.0
      },
      {
         "Name":"Teddy Scott",
         "IsAwardWinner":true,
         "Agency":{
            "Name":"A fancier agency"
         },
         "Theme":{
            "AvatarImage":"pick any image to use as an avatar"
         },
         "AverageSalePrice":627586.74,
         "SoldProperties":125,
         "TotalReviews":174,
         "StarRating":5.0
      }
   ]
})
  }
}