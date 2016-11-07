import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

const routes: Routes = [
	{	
		path: 'home',
		loadChildren: './home/home.module'
	},
	{	
		path: 'beers',
		loadChildren: './beers/beers.module'
	},	
	{	
		path: 'news',
		loadChildren: './news/news.module'
	},
	// {	
	// 	path: 'events',
	// 	loadChildren: './events/events.module'
	// },	
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

export default RouterModule.forRoot(routes);
