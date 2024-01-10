import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                label: 'Blocks',
                items: [
                    { label: 'Graph', icon: 'pi pi-fw pi-share-alt', routerLink: ['/graph'], badge: 'NEW' },
                    { label: 'List', icon: 'pi pi-fw pi-list', routerLink: ['/list-graph'], target: '_blank' },
                ]
            },
            {
                label: 'Home',
                items: [
                    { label: 'Users', icon: 'pi pi-fw pi-user', routerLink: ['/users'] }
                ]
            },
            {
                label: 'Pages',
                icon: 'pi pi-fw pi-briefcase',
                items: [
                    {
                        label: 'Nodes',
                        icon: 'pi pi-fw pi-circle-off',
                        items: [
                            {
                                label: 'Login',
                                routerLink: ['/auth/login']
                            }
                        ]
                    }
                ]
            }
        ];
    }
}
