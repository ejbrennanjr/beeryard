import { RouterModule, Routes } from '@angular/router';
import {NewsComponent} from './news.component';

const routes:Routes = [
	{path: '', component: NewsComponent}
];

export default RouterModule.forChild(routes);