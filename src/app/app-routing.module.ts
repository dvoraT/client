import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { DeliveriesListComponent } from './deliveries-list/deliveries-list.component';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { NewOrderComponent } from './new-order/new-order.component';
import { NewslatterComponent } from './newslatter/newslatter.component';
import { OrderListComponent } from './order-list/order-list.component';
import { PersonalAreaComponent } from './personal-area/personal-area.component';
import { PersonalNavComponent } from './personal-nav/personal-nav.component';
import { RecommendationsComponent } from './recommendations/recommendations.component';
import { RoutsListComponent } from './routs-list/routs-list.component';
import { StatisticComponent } from './statistic/statistic.component';

const routes: Routes = [
  {path: "Nav", component:NavComponent, children:[
  {path:"Home", component:HomeComponent},
  {path:"About", component:AboutComponent},
  {path:"Recommendations", component:RecommendationsComponent},
  {path:"Statistic", component:StatisticComponent},
  {path:"NewsLatter", component:NewslatterComponent},
  {path:"Contact", component:ContactComponent}
    ]},
    {path:"PersonalArea",component:PersonalAreaComponent, children:[
      // {path:"PersonalNav",component:PersonalNavComponent, children:[
        {path:"Details", component:DetailsComponent},
        {path:"OrderList", component:OrderListComponent},
        {path:"RoutsList", component:RoutsListComponent},
        {path:"DeliveriesList",component:DeliveriesListComponent},
        {path:"NewOrder",component:NewOrderComponent}
      ]}
    // ]}
    
    
 
  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
