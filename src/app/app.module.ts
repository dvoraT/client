import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AboutComponent } from './about/about.component';
// import { RecommendationsComponent } from './recommendations/recommendations.component';
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
import { PersonalNavComponent } from './personal-nav/personal-nav.component';
import { SingInComponent } from './sing-in/sing-in.component';
import { SingUpComponent } from './sing-up/sing-up.component';
import { ShowRoutComponent } from './show-rout/show-rout.component';
import { ListPackagesComponent } from './list-packages/list-packages.component';
import { DeliveryRoutsComponent } from './delivery-routs/delivery-routs.component';
import {MatIconModule} from '@angular/material/icon';
import { ClientRecommendationsComponent } from './client-recommendations/client-recommendations.component';
import { DeliveryDetailsComponent } from './delivery-details/delivery-details.component';
import { FormsModule } from '@angular/forms';
import { AddDeliveryComponent } from './add-delivery/add-delivery.component';

import { AuotocompletComponent } from './auotocomplet/auotocomplet.component';
import { AgmCoreModule } from '@agm/core';


import { CustomersComponent } from './customers/customers.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { SingInAsComponent } from './sing-in-as/sing-in-as.component';
import { DeliverySingInComponent } from './delivery-sing-in/delivery-sing-in.component';
import { FilterPipe } from './pipes/filter.pipe';

// import { RecommendationsComponent } from './recommendations/recommendations.component';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,

    AboutComponent,

    // RecommendationsComponent,

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

    NewOrderComponent,

    PersonalNavComponent,

    SingInComponent,

    SingUpComponent,

    ShowRoutComponent,

    ListPackagesComponent,

    DeliveryRoutsComponent,

    ClientRecommendationsComponent,

    DeliveryDetailsComponent,

    AddDeliveryComponent,


    AuotocompletComponent,

    

    CustomersComponent,
     FilterPipe,

    

    AddCustomerComponent,

    

    SingInAsComponent,

    

    DeliverySingInComponent,


    // RecommendationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatIconModule,
    FormsModule,
    HttpClientModule,
   
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyAV4YjYQCrkbS5xVCVufsbLrIMYVr4HHMA'
    })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
