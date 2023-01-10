import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegionAgentsListComponent } from './region-agents-list/region-agents-list.component';

const routes: Routes = [
  { path: "region/:region/agents", component: RegionAgentsListComponent },
  { path: '', redirectTo: 'region/melbourne/agents', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
