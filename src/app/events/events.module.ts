import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsComponent } from './events.component';
import { EventsService } from './events.service';
import eventsRoutes from './events.routes';

@NgModule({
  imports: [CommonModule, eventsRoutes],
  declarations: [EventsComponent],
  providers: [EventsService]
})
export default class EventsModule { }
