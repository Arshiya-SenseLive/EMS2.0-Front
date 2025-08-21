import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { OverlayModule, Overlay, ScrollStrategyOptions } from '@angular/cdk/overlay';
import { MAT_MENU_SCROLL_STRATEGY } from '@angular/material/menu';
import { MAT_SELECT_SCROLL_STRATEGY } from '@angular/material/select';
import { MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER } from '@angular/material/tooltip';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    OverlayModule
  ],
  providers: [
    provideClientHydration(),
    Overlay,
    MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER,
    {
      provide: MAT_MENU_SCROLL_STRATEGY,
      deps: [ScrollStrategyOptions],
      useFactory: (sso: ScrollStrategyOptions) => sso.close
    },
    {
      provide: MAT_SELECT_SCROLL_STRATEGY,
      deps: [ScrollStrategyOptions],
      useFactory: (sso: ScrollStrategyOptions) => sso.reposition
    }
    // if using interceptor, add it here later
    // { provide: HTTP_INTERCEPTORS, useClass: DataInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
