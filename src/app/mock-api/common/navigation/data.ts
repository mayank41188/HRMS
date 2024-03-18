/* eslint-disable */
import { FuseNavigationItem } from '@fuse/components/navigation';

export const defaultNavigation: FuseNavigationItem[] = [

    // Admin sidemenu Navigation
    // {
    //     id: 'hr-projects',
    //     title: 'Admin Projects',
    //     type: 'basic',
    //     icon: 'mat_outline:dashboard',
    //     link: '/projects'
    // },


    // HR sidemenu Navigation
    {
        id: 'hr-dashboard',
        title: 'Dashboard',
        type: 'basic',
        icon: 'mat_outline:dashboard',
        link: '/hr-dashboard'
    },
    {
        id: 'hr-employees',
        title: 'Employees',
        type: 'basic',
        icon: 'heroicons_outline:user-group',
        link: '/hr-employees'
    },
    {
        id: 'hr-leave-management',
        title: 'Leave Management',
        type: 'collapsable',
        icon: 'exit_to_app',
        children: [
            {
                id: 'leave-request',
                title: 'Leave Request',
                type: 'basic',
                link: '/hr-leave-management/list'
            },
            {
                id: 'apply-leave',
                title: 'Apply Leave',
                type: 'basic',
                link: '/hr-leave-management/apply-leave'
            },
        ]
    },
    {
        id: 'Holidays',
        title: 'Holidays',
        type: 'basic',
        icon: 'heroicons_outline:calendar-days',
        link: '/hr-holiday'
    },

    {
        id: 'payroll',
        title: 'Payroll',
        type: 'collapsable',
        icon: 'mat_outline:account_balance_wallet',
        link: '',
        children: [
            {
                id: 'payroll-list',
                title: 'Add to Payroll',
                type: 'basic',
                link: '/payroll/payroll-list'
            },
            {
                id: 'payslip-list',
                title: 'Generate Payslip',
                type: 'basic',
                link: '/payroll/payslip-list'
            },
        ]
    },

    {
        id: 'Attendance',
        title: 'Attendance',
        type: 'basic',
        icon: 'mat_outline:event_available',
        link: '/attendance'
    },

    {
        id: 'jobs-recruitment',
        title: 'Jobs & Recruitment',
        type: 'collapsable',
        icon: 'exit_to_app',
        children: [
            {
                id: 'jobs-list',
                title: 'Jobs',
                type: 'basic',
                link: '/hr-jobs/list'
            },
            {
                id: 'candidates',
                title: 'Candidates',
                type: 'basic',
                link: '/hr-jobs/candidatelist'
            },
        ]
    },
    {
        id: 'tasks',
        title: 'Tasks',
        type: 'basic',
        icon: 'mat_outline:assignment',
        link: '/hr-tasks'
    },
    {
        id: 'policies',
        title: 'Policy & Documents',
        type: 'basic',
        icon: 'mat_outline:rule',
        link: '/hr-policies'
    },

    {
        id: 'Events',
        title: 'Events',
        type: 'basic',
        icon: 'mat_outline:event',
        link: '/events'
    },
    {
        id: 'reports',
        title: 'Reports',
        type: 'basic',
        icon: 'mat_outline:receipt_long',
        link: '/hr-reports'
    },
    {
        id: 'tax-forms',
        title: 'Tax & Forms',
        type: 'basic',
        icon: 'heroicons_outline:document-chart-bar',
        link: '/hr-tax-forms'
    },



    //Employee Navigation

    {
        id: 'employee-leaves',
        title: 'Leaves',
        type: 'basic',
        icon: 'heroicons_outline:document-chart-bar',
        link: '/employee-leaves'
    },

    {
        id: 'employee-holidays',
        title: 'Holidays',
        type: 'basic',
        icon: 'heroicons_outline:document-chart-bar',
        link: '/employee-holidays'
    },
    {
        id: 'employee-projects',
        title: 'Projects',
        type: 'basic',
        icon: 'heroicons_outline:document-chart-bar',
        link: '/employee-projects'
    },

    {
        id: 'employee-Attendance',
        title: 'Attendance',
        type: 'basic',
        icon: 'heroicons_outline:calendar-days',
        link: '/employee-attendance'
    },

    {
        id: 'jobs',
        title: 'Jobs & Recruitment',
        type: 'basic',
        icon: 'exit_to_app',
        link: '/jobs'
    },

    {
        id: 'employee-Tasks',
        title: 'Tasks',
        type: 'basic',
        icon: 'exit_to_app',
        link: '/employee-tasks'
    },

    {
        id: 'Events',
        title: 'Events',
        type: 'basic',
        icon: 'mat_outline:event',
        link: '/employee-events'
    },

    {
        id: 'Policy',
        title: 'Policy & Documents',
        type: 'basic',
        icon: 'mat_outline:rule',
        link: '/employee-policies'
    },

    {
        id: 'shared-documents',
        title: 'Shared Documents',
        type: 'basic',
        icon: 'mat_outline:rule',
        link: '/shared-documents'
    },
];


export const compactNavigation: FuseNavigationItem[] = [
    {
        id: 'example',
        title: 'Example',
        type: 'basic',
        icon: 'heroicons_outline:chart-pie',
        link: '/example'
    }
];
export const futuristicNavigation: FuseNavigationItem[] = [
    {
        id: 'example',
        title: 'Example',
        type: 'basic',
        icon: 'heroicons_outline:chart-pie',
        link: '/example'
    }
];
export const horizontalNavigation: FuseNavigationItem[] = [
    {
        id: 'example',
        title: 'Example',
        type: 'basic',
        icon: 'heroicons_outline:chart-pie',
        link: '/example'
    }
];


