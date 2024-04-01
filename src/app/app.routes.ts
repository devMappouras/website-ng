import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('../pages/landing-page/landing-page.component').then(c => c.LandingPageComponent)
    },
    // {
    //     path: 'about-us',
    //     loadComponent: (): any => import('./about-us.component').then (c => c.AboutUsComponent)
    // }
];
