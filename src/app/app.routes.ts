import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RandomQuoteComponent } from './random-quote/random-quote.component';

export const routes: Routes = [
    {path: "", component: HomeComponent},
    {path: "about", component: AboutComponent},
    {path: "random-qoute", component: RandomQuoteComponent},
];
