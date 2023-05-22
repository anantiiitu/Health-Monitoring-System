import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HealthChartComponent } from './health-chart/health-chart.component';

const routes: Routes = [
  { path: 'sidebar', component: SidebarComponent },
  { path: 'health-chart', component: HealthChartComponent },
  { path: '', redirectTo: '/sidebar', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
