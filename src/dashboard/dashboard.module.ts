import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import DataService from '../app/service/data.service';

const routes = [
    { path: 'dashboard', component: DashboardComponent }
];

const routing: ModuleWithProviders = RouterModule.forChild(routes);

@NgModule({
    declarations: [
        DashboardComponent
    ],
    imports: [
        routing
    ],
    providers: [
        DataService
    ]
})
export class DashboardModule { }
