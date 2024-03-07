/* eslint-disable */
import { FuseNavigationItem } from '@fuse/components/navigation';

export const defaultNavigation: FuseNavigationItem[] = [
    {
        id   : 'dashboard',
        title: 'Dashboard',
        type : 'basic',
        icon : 'mat_outline:dashboard',
        link : '/dashboard'
    },
    {
        id   : 'projects',
        title: 'Projects',
        type : 'basic',
        icon : 'mat_outline:dashboard',
        link : '/projects'
    },
    {
        id   : 'hr-employees',
        title: 'Employees',
        type : 'basic',
        icon : 'mat_outline:dashboard',
        link : '/hr-employees'
    },


// {
//         id: 'master-management',
//         title: 'Master Management',
//         type: 'collapsable',
//         icon: 'mat_solid:admin_panel_settings',
//         children: [
//             {
//                 id: 'Gates',
//                 title: 'Parking Gates',
//                 type: 'basic',
//                 icon: 'mat_solid:exit_to_app',
//                 link: '/gates',
//             },
//             {
//                 id: 'POSDevices',
//                 title: 'POS Devices',
//                 type: 'basic',
//                 icon: 'mat_solid:device_hub',
//                 link: '/pos-devices',
//             }
//         ],
//     }
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
