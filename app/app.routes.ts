import { provideRouter, RouterConfig } from '@angular/router';
import { Page1Component }  from './page1.component';
import { Page2Component }    from './page2.component';
const routes: RouterConfig = [
    { path: 'page1', component: Page1Component },
    { path: 'page2', component: Page2Component }
];
export const appRouterProviders = [
    provideRouter(routes)
];