/* eslint-disable */
import { FuseNavigationItem } from '@fuse/components/navigation';

export const defaultNavigation: FuseNavigationItem[] = [
    {
        id   : 'dashboard',
        title: 'Dashboard',
        type : 'basic',
        icon : 'mat_outline:dashboard',
        link : ''
    },
    {
        id   : 'hr-employees',
        title: 'Employees',
        type : 'basic',
        icon : 'heroicons_outline:user-group',
        link : '/hr-employees'
    },
    {
        id   : 'leave-management',
        title: 'Leave Request',
        type : 'collapsable',
        icon : 'exit_to_app',
        children:[
            {
                id   : 'leave-request',
                title: 'Leave Request',
                type : 'basic',
                link : '/leave-management/list'
            },  
            {
                id   : 'apply-leave',
                title: 'Apply Leave',
                type : 'basic',
                link : '/leave-management/apply-leave'
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
                link : '/payroll'
            },  
            {
                id   : 'generate-payslip',
                title: 'Generate Payslip',
                type : 'basic',
                link : ''
            },  
        ]
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


