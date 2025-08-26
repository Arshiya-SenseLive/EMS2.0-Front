import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { SharedModule } from '../shared/shared.module';

import { UserHeaderComponent } from './user-layout/user-header/user-header.component';
import { UserBodyComponent } from './user-layout/user-body/user-body.component';
import { UserSidenavComponent } from './user-layout/user-sidenav/user-sidenav.component';
import { UserLayoutComponent } from './user-layout/user-layout/user-layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AnalyticsComponent } from './pages/analytics/analytics.component';
import { ConfigurationComponent } from './pages/configuration/configuration.component';
import { ReportComponent } from './pages/report/report.component';
import { SettingsComponent } from './pages/settings/settings.component';

@NgModule({
  declarations: [
    UserHeaderComponent,
    UserBodyComponent,
    UserSidenavComponent,
    UserLayoutComponent,
    DashboardComponent,
    AnalyticsComponent,
    ConfigurationComponent,
    ReportComponent,
    SettingsComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule 
  ]
})
export class UserModule {}
