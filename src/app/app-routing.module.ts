import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { NewslatterComponent } from './newslatter/newslatter.component';
import { RecommendationsComponent } from './recommendations/recommendations.component';
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
    
 
  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
