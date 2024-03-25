/* eslint-disable */
import { FuseNavigationItem } from '@fuse/components/navigation';

export const defaultNavigation: FuseNavigationItem[] = [

    // HR sidemenu Navigation
    {
        id: 'hr-dashboard',
        title: 'Dashboard',
        type: 'basic',
        icon: 'dashboard',
        link: '/hr-dashboard'
    },
    {
        id: 'hr-employees',
        title: 'Employees',
        type: 'basic',
        icon: 'Employee',
        link: '/hr-employees'
    },
    {
        id: 'hr-leave-management',
        title: 'Leave Management',
        type: 'collapsable',
        icon: 'Leave-Management',
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
        icon: 'Holidays',
        link: '/hr-holiday'
    },

    {
        id: 'payroll',
        title: 'Payroll',
        type: 'collapsable',
        icon: 'Payroll',
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
        icon: 'Attendance',
        link: '/attendance'
    },

    {
        id: 'jobs-recruitment',
        title: 'Jobs & Recruitment',
        type: 'collapsable',
        icon: 'Jobs-Recruitment',
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
        icon: 'Task',
        link: '/hr-tasks'
    },
    {
        id: 'policies',
        title: 'Policy & Documents',
        type: 'basic',
        icon: 'Policy-Documents',
        link: '/hr-policies'
    },

    {
        id: 'Events',
        title: 'Events',
        type: 'basic',
        icon: 'Events',
        link: '/events'
    },
    {
        id: 'reports',
        title: 'Reports',
        type: 'basic',
        icon: 'Reports',
        link: '/hr-reports'
    },
    {
        id: 'tax-forms',
        title: 'Tax & Forms',
        type: 'basic',
        icon: 'Tax-Forms',
        link: '/hr-tax-forms'
    },



    //Employee Navigation

    {
        id: 'employee-leaves',
        title: 'Leaves',
        type: 'basic',
        icon: 'Leave-Management',
        link: '/employee-leaves'
    },

    {
        id: 'employee-holidays',
        title: 'Holidays',
        type: 'basic',
        icon: 'Holidays',
        link: '/employee-holidays'
    },
    {
        id: 'employee-projects',
        title: 'Projects',
        type: 'basic',
        icon: 'Projects',
        link: '/employee-projects'
    },

    {
        id: 'employee-Attendance',
        title: 'Attendance',
        type: 'basic',
        icon: 'Attendance',
        link: '/employee-attendance'
    },

    {
        id: 'jobs',
        title: 'Jobs & Recruitment',
        type: 'basic',
        icon: 'Jobs-Recruitment',
        link: '/jobs'
    },

    {
        id: 'employee-Tasks',
        title: 'Tasks',
        type: 'basic',
        icon: 'Task',
        link: '/employee-tasks'
    },

    {
        id: 'Events',
        title: 'Events',
        type: 'basic',
        icon: 'Events',
        link: '/employee-events'
    },

    {
        id: 'Policy',
        title: 'Policy & Documents',
        type: 'basic',
        icon: 'Policy-Documents',
        link: '/employee-policies'
    },

    {
        id: 'shared-documents',
        title: 'Shared Documents',
        type: 'basic',
        icon: 'Policy-Documents',
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


