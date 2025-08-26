import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material.module';
import { SelectComponent } from './components/select/select.component';
import { SettingPanelComponent } from './components/setting-panel/setting-panel.component';

@NgModule({
  declarations: [
    SelectComponent,
    SettingPanelComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MaterialModule,
    OverlayModule
  ],
  exports:[
    CommonModule,
    FormsModule,
    RouterModule,
    MaterialModule,
    OverlayModule,
    SelectComponent,
    SettingPanelComponent
  ]
})
export class SharedModule { }
