import { RouterModule, Routes } from '@angular/router';
import {EventsComponent} from './events.component';

const routes: Routes = [
	{path: 'events', component: EventsComponent}
];

export default RouterModule.forChild(routes);