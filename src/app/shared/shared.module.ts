import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material.module';
import { SelectComponent } from './components/select/select.component';
import { SettingPanelComponent } from './components/setting-panel/setting-panel.component';
import { HighchartsChartComponent } from 'highcharts-angular';



@NgModule({
  declarations: [
    SelectComponent,
    SettingPanelComponent,
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MaterialModule,
    OverlayModule,
    HighchartsChartComponent
    
  ],
  exports:[
    CommonModule,
    FormsModule,
    RouterModule,
    MaterialModule,
    OverlayModule,
    SelectComponent,
    SettingPanelComponent,
    HighchartsChartComponent
  ]
})
export class SharedModule { }
