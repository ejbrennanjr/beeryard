import { RouterModule, Routes } from '@angular/router';
import {BeersComponent} from './beers.component';

const routes: Routes = [
	{path: '', component: BeersComponent}
];

export default RouterModule.forChild(routes);