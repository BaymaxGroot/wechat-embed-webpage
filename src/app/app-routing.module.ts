import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './view/home/home.component';
import {NannyComponent} from './view/nanny/nanny.component';
import {ServiceComponent} from './view/service/service.component';
import {AccountComponent} from './view/account/account.component';

const routes: Routes = [
  // {path: '', redirectTo: 'home', pathMatch: 'full'},
  // {path: 'home', component: HomeComponent},
  // {path: 'nanny', component: NannyComponent},
  // {path: 'service', component: ServiceComponent},
  // {path: 'account', component: AccountComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
