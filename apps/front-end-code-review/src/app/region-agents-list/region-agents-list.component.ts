import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AgnetDataService } from '../agent-data.service';
import { RegionDataService } from '../region-data.service';
import { NgIf, NgFor, TitleCasePipe } from '@angular/common';

@Component({
    selector: 'rma-region-agents-list',
    templateUrl: './region-agents-list.component.html',
    styleUrls: ['./region-agents-list.component.scss'],
    standalone: true,
    imports: [
        NgIf,
        NgFor,
        TitleCasePipe,
    ],
})
export class RegionAgentsListComponent implements OnInit {
  agents;
  dataService;
  regionService;
  region;
  regionId;

  constructor(
    dataService: AgnetDataService,
    regionService: RegionDataService,
    route: ActivatedRoute
  ) {
    this.dataService = dataService;
    this.regionService = regionService;
    this.region = route.snapshot.paramMap.get('region');
  }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.regionService.getRegionIdByName(this.region).subscribe((id) => {
      this.regionId = id;
      this.getRegionAgents();
    });
  }

  getRegionAgents() {
    this.dataService
      .getRegionAgents(this.regionId)
      .subscribe((agents) => (this.agents = agents));
  }

  getShortAmount(amount, decimalPlaces) {
    if (amount < 1) return '<1';
    let k = (amount = Math.floor(amount));
    if (amount < 1000) return amount.toString().split('.')[0];
    if (decimalPlaces !== 0) decimalPlaces = decimalPlaces || 1;

    function shorten(a, b, c) {
      var d = a.toString().split('.');
      if (!d[1] || b === 0) {
        return d[0] + c;
      } else {
        return d[0] + '.' + d[1].substring(0, b) + c;
      }
    }

    k = amount / 1e15;
    if (k >= 1) return shorten(k, decimalPlaces, 'Q');
    k = amount / 1e12;
    if (k >= 1) return shorten(k, decimalPlaces, 'T');
    k = amount / 1e9;
    if (k >= 1) return shorten(k, decimalPlaces, 'B');
    k = amount / 1e6;
    if (k >= 1) return shorten(k, decimalPlaces, 'M');
    k = amount / 1e3;
    if (k >= 1) return shorten(k, decimalPlaces, 'K');
  }

  contactAgent(name) {
    alert(`Get in touch with ${name}`);
  }
}
