import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ReportComponent } from './pages/report/report.component';
import { AnalyticsComponent } from './pages/analytics/analytics.component';
import { ConfigurationComponent } from './pages/configuration/configuration.component';
import { SettingsComponent } from './pages/settings/settings.component';

const routes: Routes = [
   { path: 'd', component: DashboardComponent, data: { breadcrumb: 'Dashboard' } },
    { path: 'r', component: ReportComponent, data: { breadcrumb: 'Report' } },
    { path: 'a', component: AnalyticsComponent, data: { breadcrumb: 'Analytics' } },
    { path: 'c', component: ConfigurationComponent, data: { breadcrumb: 'Configuration' } },
    { path: 's', component: SettingsComponent, data: { breadcrumb: 'Settings' } },
    { path: '', redirectTo: 'd', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
