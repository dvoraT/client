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
import { ContainerComponent } from './container/container.component';
import { PersonalAreaComponent } from './personal-area/personal-area.component';
import { DetailsComponent } from './details/details.component';
import { OrderListComponent } from './order-list/order-list.component';
import { RoutsListComponent } from './routs-list/routs-list.component';
import { DeliveriesListComponent } from './deliveries-list/deliveries-list.component';
import { NewOrderComponent } from './new-order/new-order.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    
    AboutComponent,
    
    RecommendationsComponent,
    
    StatisticComponent,
    
    NewslatterComponent,
    
    ContactComponent,
    
    HomeComponent,
    
    ContainerComponent,
    
    PersonalAreaComponent,
    
    DetailsComponent,
    
    OrderListComponent,
    
    RoutsListComponent,
    
    DeliveriesListComponent,
    
    NewOrderComponent
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
