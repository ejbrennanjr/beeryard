import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './news.component';
import { NewsService } from './news.service';
import newsRoutes from './news.routes';

@NgModule({
  imports: [CommonModule, newsRoutes],
  declarations: [NewsComponent],
  providers: [NewsService]
})
export default class NewsModule { }
