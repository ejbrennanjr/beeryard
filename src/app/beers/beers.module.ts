import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BeersComponent } from './beers.component';
import { BeersService } from './beers.service';
import beersRoutes from './beers.routes';

@NgModule({
  imports: [CommonModule, beersRoutes],
  declarations: [BeersComponent],
  providers: [BeersService]
})
export default class BeersModule { }
