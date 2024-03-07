import { Routes } from '@angular/router';
import { AuthConfirmationRequiredComponent } from 'Modules/auth/confirmation-required/confirmation-required.component';

export default [
    {
        path     : '',
        component: AuthConfirmationRequiredComponent,
    },
] as Routes;
