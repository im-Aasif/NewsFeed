import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedComponent } from './feed/feed.component';
import { DetailComponent } from './detail/detail.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: FeedComponent, children: [
        { path: ':id', component: DetailComponent}
    ]},
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],

exports: [RouterModule]
})
export class AppRoutingModule { }
