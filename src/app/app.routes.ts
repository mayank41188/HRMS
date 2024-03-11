import { Route } from '@angular/router';
import { initialDataResolver } from 'app/app.resolvers';
import { AuthGuard } from 'app/core/auth/guards/auth.guard';
import { NoAuthGuard } from 'app/core/auth/guards/noAuth.guard';
import { LayoutComponent } from 'app/layout/layout.component';

// @formatter:off
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
export const appRoutes: Route[] = [

    { path: '', pathMatch: 'full', redirectTo: 'hr-dashboard' },

    { path: 'signed-in-redirect', pathMatch: 'full', redirectTo: 'hr-dashboard' },

    // Auth routes for guests
    {
        path: '',
        canActivate: [NoAuthGuard],
        canActivateChild: [NoAuthGuard],
        component: LayoutComponent,
        data: {
            layout: 'empty'
        },
        children: [
            { path: 'confirmation-required', loadChildren: () => import('Modules/auth/confirmation-required/confirmation-required.routes') },
            { path: 'forgot-password', loadChildren: () => import('Modules/auth/forgot-password/forgot-password.routes') },
            { path: 'reset-password', loadChildren: () => import('Modules/auth/reset-password/reset-password.routes') },
            { path: 'sign-in', loadChildren: () => import('Modules/auth/sign-in/sign-in.routes') },
            { path: 'sign-up', loadChildren: () => import('Modules/auth/sign-up/sign-up.routes') }
        ]
    },

    // Auth routes for authenticated users
    {
        path: '',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        component: LayoutComponent,
        data: {
            layout: 'empty'
        },
        children: [
            { path: 'sign-out', loadChildren: () => import('Modules/auth/sign-out/sign-out.routes') },
            { path: 'unlock-session', loadChildren: () => import('Modules/auth/unlock-session/unlock-session.routes') }
        ]
    },

    // Admin routes
    {
        path: 'admin-dashboard',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        component: LayoutComponent,
        resolve: {
            initialData: initialDataResolver
        },
        loadChildren: () => import('./admin/admin-dashboard/dashboard.module').then(m => m.DashboardModule)
    },
    {
        path: 'projects',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        component: LayoutComponent,
        resolve: {
            initialData: initialDataResolver
        },
        loadChildren: () => import('./admin/projects/projects.module').then(m => m.ProjectsModule)
    },
    {
        path: 'clients',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        component: LayoutComponent,
        resolve: {
            initialData: initialDataResolver
        },
        loadChildren: () => import('./admin/clients/clients.module').then(m => m.ClientsModule)
    },

    // HR routes

    {
        path: 'hr-employees',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        component: LayoutComponent,
        resolve: {
            initialData: initialDataResolver
        },
        loadChildren: () => import('./hr/employee/employee.module').then(m => m.EmployeeModule)
    },
    {
        path: 'hr-leave-management',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        component: LayoutComponent,
        resolve: {
            initialData: initialDataResolver
        },
        loadChildren: () => import('./hr/leave-management/leave-management.module').then(m => m.LeaveManagementModule)
    },
    {
        path: 'payroll',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        component: LayoutComponent,
        resolve: {
            initialData: initialDataResolver
        },
        loadChildren: () => import('./hr/payroll/payroll.module').then(m => m.PayrollModule)
    },
    {
        path: 'hr-leave-management',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        component: LayoutComponent,
        resolve: {
            initialData: initialDataResolver
        },
        loadChildren: () => import('./hr/leave-management/leave-management.module').then(m => m.LeaveManagementModule)
    },
    {
        path: 'hr-holiday',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        component: LayoutComponent,
        resolve: {
            initialData: initialDataResolver
        },
        loadChildren: () => import('./hr/holiday/holiday.module').then(m => m.HolidayModule)
    },

    {
        path: 'attendance',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        component: LayoutComponent,
        resolve: {
            initialData: initialDataResolver
        },
        loadChildren: () => import('./hr/attendance/attendance.module').then(m => m.AttendanceModule)
    },
    {
        path: 'hr-jobs',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        component: LayoutComponent,
        resolve: {
            initialData: initialDataResolver
        },
        loadChildren: () => import('./hr/jobs-recruitment/jobs-recruitment.module').then(m => m.JobsRecruitmentModule)
    },
    {
        path: 'hr-tasks',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        component: LayoutComponent,
        resolve: {
            initialData: initialDataResolver
        },
        loadChildren: () => import('./hr/tasks/tasks.module').then(m => m.TasksModule)
    },

    {
        path: 'hr-dashboard',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        component: LayoutComponent,
        resolve: {
            initialData: initialDataResolver
        },
        loadChildren: () => import('./HR/hr-dashboard/hr-dashboard.module').then(m => m.HrDashboardModule)
    },
    {
        path: 'hr-tasks',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        component: LayoutComponent,
        resolve: {
            initialData: initialDataResolver
        },
        loadChildren: () => import('./hr/tasks/tasks.module').then(m => m.TasksModule)
    },
    {
        path: 'hr-policies',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        component: LayoutComponent,
        resolve: {
            initialData: initialDataResolver
        },
        loadChildren: () => import('./hr/policies/policies.module').then(m => m.PoliciesModule)
    },

];
