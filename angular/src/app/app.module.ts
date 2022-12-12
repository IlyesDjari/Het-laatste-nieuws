import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatTabsModule } from '@angular/material/tabs';
import { NewsItemComponent } from './news-item/news-item.component';
import { HeadlinesComponent } from './headlines/headlines.component';
import { NewsDetailComponent } from './news-detail/news-detail.component';
import { Widget } from './widget/widget.component';
import { Clock } from './clock/clock.component';

@NgModule({
  declarations: [
    Widget,
    AppComponent,
    HeadlinesComponent,
    NewsItemComponent,
    NewsDetailComponent,
    Clock
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTabsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
