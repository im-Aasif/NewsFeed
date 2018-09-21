import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app/app.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';
import { SideNavService } from './side-nav/services/side-nav.service';
import { AppRoutingModule } from './app-routing.module';
import { FeedComponent } from './feed/feed.component';
import { DetailComponent } from './detail/detail.component';
import { NewsService } from './core/services/news.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RequestInterceptor } from './core/http.interceptor';
import { StoreModule } from '@ngrx/store';
import { sourceReducer } from './core/state/source.reducer';
import { articleReducer } from './core/state/article.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './core/state/app.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { SourcesComponent } from './sources/sources.component'; // Angular CLI environemnt

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    FeedComponent,
    DetailComponent,
    SourcesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CommonModule,
    AppRoutingModule,
    MaterialModule,
    StoreModule.forRoot({
      source: sourceReducer,
      article: articleReducer
    }),
    EffectsModule.forRoot([AppEffects]),
    // Instrumentation must be imported after importing StoreModule (config is optional)
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
  ],
  providers: [
    SideNavService, NewsService,
    { provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
