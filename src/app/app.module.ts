import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AboutComponent } from './about/about.component';
import { RecommendationsComponent } from './recommendations/recommendations.component';
import { StatisticComponent } from './statistic/statistic.component';
import { NewslatterComponent } from './newslatter/newslatter.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    
    AboutComponent,
    
    RecommendationsComponent,
    
    StatisticComponent,
    
    NewslatterComponent,
    
    ContactComponent,
    
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
