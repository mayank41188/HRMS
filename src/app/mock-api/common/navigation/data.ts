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
        link : '/hr-leave-management',
        children:[
            {
                id   : 'leave-request',
                title: 'Leave Request',
                type : 'basic',
                link : ''
            },  
            {
                id   : 'apply-leave',
                title: 'Apply Leave',
                type : 'basic',
                link : ''
            },  
        ]
    },

    {
        id   : 'payroll',
        title: 'Payroll',
        type : 'collapsable',
        icon : 'exit_to_app',
        link : '/payroll-list',
        children:[
            {
                id   : 'leave-request',
                title: 'Leave Request',
                type : 'basic',
                link : ''
            },  
            {
                id   : 'apply-leave',
                title: 'Apply Leave',
                type : 'basic',
                link : ''
            },  
        ]
    },
    {
        id   : 'Holidays',
        title: 'Holidays',
        type : 'basic',
        icon : 'heroicons_outline:calendar-days',
        link : '/hr-holidays'
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


