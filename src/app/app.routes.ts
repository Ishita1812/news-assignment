import { Routes } from '@angular/router';
import { AboutComponent } from './component/about/about.component';
import { ContactComponent } from './component/contact/contact.component';
import { CardComponent } from './component/dashboard/card/card.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { RecentNewsComponent } from './component/recent-news/recent-news.component';
import { RecentComponent } from './component/recent-news/recent/recent.component';

export const routes: Routes = [
    {path:'', component: DashboardComponent},
    {path:'dashboard', component: DashboardComponent},
    {path:'card/:id', component: CardComponent},
    { path: 'courses', component: RecentNewsComponent},
    { path: 'contact', component: ContactComponent },
    { path: 'about', component: AboutComponent},
 
  { path: 'courses/course/:id', component: RecentComponent },
];
