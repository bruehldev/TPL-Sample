import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
@Component({
    selector: 'my-app',
    template: `    
    
    <tpl-tabs elements='[{"name" : "Dolor sit amet", "link" : "/page1"},
                    {"name" : "Lorem Ipsum", "link" : "/page2"}]' active='not'>
    </tpl-tabs>
      
    <!-- fixes minor layout issues -->
    <br clear="all">
      
    <router-outlet></router-outlet>
  `,
    directives: [ROUTER_DIRECTIVES]
})
export class AppComponent { }