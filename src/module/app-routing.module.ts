import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
// Import the HeroesComponent so you can reference it in a Route
import { HeroesComponent } from '../app/heroes/heroes.component';
// Import the Dashboard so we can link it in a router
import { DashboardComponent } from "src/app/dashboard/dashboard.component";
// Import the Hero details so we can link it in a router
import { HeroDetailComponent } from "src/app/hero-detail/hero-detail.component";

//
// This is to added routes/links to array 
//
const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'heroes', component: HeroesComponent},
  { path: 'details/:id', component: HeroDetailComponent}
];

@NgModule({
  //
  // initialize the router and start it listening for browser location changes.
  // forRoot() because you configure the router at the application's root level
  //
  imports: [  RouterModule.forRoot(routes) ],
  exports:[ 
    RouterModule
  ]
})
export class AppRoutingModule { }
