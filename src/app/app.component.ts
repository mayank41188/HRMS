import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';

@Component({
    selector   : 'app-root',
    templateUrl: './app.component.html',
    styleUrls  : ['./app.component.scss'],
    standalone : true,
    imports    : [RouterOutlet],
})
export class AppComponent{
    icons: Array<string> = [
        'dashboard',
        'Employee',
        'Leave-Management',
        'Holidays',
        'Payroll',
        'Attendance',
        'Jobs-Recruitment',
        'Task',
        'Policy-Documents',
        'Events',
        'Reports',
        'Tax-Forms',
        'Projects'
    ];
    constructor(
        private iconRegistry: MatIconRegistry,
        private sanitizer: DomSanitizer
    )
    {
        this.icons.map(e => {
            this.iconRegistry.addSvgIcon(
                e, this.sanitizer.bypassSecurityTrustResourceUrl(`../assets/icons/sidebar/${e}.svg`));
        });
    }
}
