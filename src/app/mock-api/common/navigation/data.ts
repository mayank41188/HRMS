/* eslint-disable */
import { FuseNavigationItem } from '@fuse/components/navigation';

export const defaultNavigation: FuseNavigationItem[] = [
    {
        id   : 'hr-dashboard',
        title: 'Dashboard',
        type : 'basic',
        icon : 'mat_outline:dashboard',
        link : '/hr-dashboard'
    },
    {
        id   : 'hr-employees',
        title: 'Employees',
        type : 'basic',
        icon : 'heroicons_outline:user-group',
        link : '/hr-employees'
    },
    {
        id   : 'hr-leave-management',
        title: 'Leave Management',
        type : 'collapsable',
        icon : 'exit_to_app',
        children:[
            {
                id   : 'leave-request',
                title: 'Leave Request',
                type : 'basic',
                link : '/hr-leave-management/list'
            },  
            {
                id   : 'apply-leave',
                title: 'Apply Leave',
                type : 'basic',
                link : '/hr-leave-management/apply-leave'
            },  
        ]
    },
    {
        id   : 'Holidays',
        title: 'Holidays',
        type : 'basic',
        icon : 'heroicons_outline:calendar-days',
        link : '/hr-holiday'
    },

    {
        id   : 'payroll',
        title: 'Payroll',
        type : 'collapsable',
        icon : 'mat_outline:account_balance_wallet',
        link : '',
        children:[
            {
                id   : 'payroll-list',
                title: 'Add to Payroll',
                type : 'basic',
                link : '/payroll/payroll-list'
            },  
            {
                id   : 'payslip-list',
                title: 'Generate Payslip',
                type : 'basic',
                link : '/payroll/payslip-list'
            },  
        ]
    },

    {
        id   : 'Attendance',
        title: 'Attendance',
        type : 'basic',
        icon : 'heroicons_outline:calendar-days',
        link : '/attendance'
    },

    {
        id   : 'jobs-recruitment',
        title: 'Jobs & Recruitment',
        type : 'collapsable',
        icon : 'exit_to_app',
        children:[
            {
                id   : 'jobs-list',
                title: 'Jobs',
                type : 'basic',
                link : '/hr-jobs/list'
            },  
            {
                id   : 'candidates',
                title: 'Candidates',
                type : 'basic',
                link : '/hr-jobs/candidatelist'
            },  
        ]
    },
    {
        id   : 'tasks',
        title: 'Tasks',
        type : 'basic',
        icon : 'heroicons_outline:calendar-days',
        link : '/hr-tasks'
    },
    {
        id   : 'policies',
        title: 'Policies',
        type : 'basic',
        icon : 'heroicons_outline:calendar-days',
        link : '/hr-policies'
    },
];


export const compactNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    }
];
export const futuristicNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    }
];
export const horizontalNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    }
];


