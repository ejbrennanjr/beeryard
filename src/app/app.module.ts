import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing/app-routing.module'

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroService } from './hero.service';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { BeersComponent } from './beers/beers.component';
import { BeersService } from './beers.service';
import { NewsComponent } from './news/news.component';
import { NewsService } from './news.service';
import { NavbarComponent } from './navbar/navbar.component';
import { EventsComponent } from './events/events.component';
import { EventsService } from './events.service';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    DashboardComponent,
    HeroSearchComponent,
    NewsComponent,
    NavbarComponent,
    EventsComponent,
    BeersComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [HeroService, BeersService, NewsService, EventsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
