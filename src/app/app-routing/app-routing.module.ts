import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { BeersComponent } from '../beers/beers.component';
import { NewsComponent } from '../news/news.component';
import { EventsComponent } from '../events/events.component';


import { DashboardComponent } from '../dashboard/dashboard.component';
import { HeroesComponent } from '../heroes/heroes.component';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';

const routes: Routes = [
	{	
		path: 'home',
		component: HomeComponent
	}
	{	
		path: 'beers',
		component: BeersComponent
	},
	{	
		path: 'news',
		component: NewsComponent
	},
	{	
		path: 'events',
		component: EventsComponent
	},	
	{
		path: '',
		redirectTo: '/home',
		pathMatch: 'full'
	},
	{
		path: 'dashboard',
		component: DashboardComponent  
	},
	{
		path: 'detail/:id',
		component: HeroDetailComponent
	},
	{
		path: 'heroes',
		component: HeroesComponent  
	}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
