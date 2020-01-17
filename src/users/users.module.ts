import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { UsersComponent } from './components/users/users.component';
import DataService from '../app/service/data.service';

const routes = [
    { path: '', component: UsersComponent }
];

const routing: ModuleWithProviders = RouterModule.forChild(routes);

@NgModule({
    declarations: [
        UsersComponent
    ],
    imports: [
        routing
    ],
    providers: [
        DataService
    ]
})
export class UsersModule { }
