import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegionAgentsListComponent } from './region-agents-list/region-agents-list.component';

const routes: Routes = [
  {path: "region/:region/agents", component: RegionAgentsListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
