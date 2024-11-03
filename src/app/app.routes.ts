import { Routes } from '@angular/router';
import { UsersListComponent } from './users-list/users-list.component'; 
import { UsersCreateComponent } from './users-create/users-create.component';

export const routes: Routes = [
    {
        path:'', component:UsersListComponent
    },
    {
        path:'create', component:UsersCreateComponent
    },
];
