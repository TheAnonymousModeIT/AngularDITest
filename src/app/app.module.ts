import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app-component/app.component';
import { HomeComponent } from './components/home/home.component';

import { MasterComponent } from './components/master-and-slaves/master/master.component';
import { Slave1Component } from './components/master-and-slaves/slave1/slave1.component';
import { Slave2Component } from './components/master-and-slaves/slave2/slave2.component';

import { ParentComponent } from './components/parent-and-children/parent/parent.component';
import { Child1Component } from './components/parent-and-children/child1/child1.component';
import { Child2Component } from './components/parent-and-children/child2/child2.component';

import DataService from './service/data.service';

import { DashboardModule } from '../dashboard/dashboard.module';

const routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'users', pathMatch: 'full', loadChildren: () => import('../users/users.module').then(m => m.UsersModule) }
];

const routing: ModuleWithProviders = RouterModule.forRoot(routes);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MasterComponent,
    Slave1Component,
    Slave2Component,
    ParentComponent,
    Child1Component,
    Child2Component,
  ],
  imports: [
    BrowserModule,
    routing,
    DashboardModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
