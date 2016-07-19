import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
@Component({
    selector: 'my-app',
    template: `
    <h1>TPL-Sample</h1>
    <nav>
      <a routerLink="/page1" routerLinkActive="active">Page 1</a>
      <a routerLink="/page2" routerLinkActive="active">Page 2</a>
    </nav>
    <router-outlet></router-outlet>
  `,
    directives: [ROUTER_DIRECTIVES]
})
export class AppComponent { }