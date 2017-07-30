import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppsComponent } from './apps/apps.component';
import { DevicesComponent } from './devices/devices.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'apps' },
  { path: 'apps', component: AppsComponent },
  { path: 'devices', component: DevicesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

export const routingComponents = [AppsComponent, DevicesComponent];
