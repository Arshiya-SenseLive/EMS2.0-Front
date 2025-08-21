import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material.module';


@NgModule({
  declarations: [],
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
    OverlayModule
  ]
})
export class SharedModule { }
