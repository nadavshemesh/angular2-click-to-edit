import { Component } from '@angular/core';
import { NDV_DIRECTIVES } from 'angular2-click-to-edit/components';

@Component({
    selector: 'my-app',
    styles: [`

        h3 {
            padding:6px;
            border-radius: 3px;
        }
    `],
    template: `

<div class="container">
      <div class="header clearfix">
        <h3 class="text-muted">Angular2-Click-to-Edit Example</h3>
      </div>
      <div class="jumbotron" style='background:white;'>
        <h3>Click on a binding to edit it! </h3>
        <h4>First Name</h4><p><ndv-edit [title]="'firstName'" [placeholder]="firstName" (onSave)="saveMethod($event)"></ndv-edit></p>
        <h4>Last Name</h4><p><ndv-edit [title]="'lastName'" [placeholder]="lastName" (onSave)="saveMethod($event)"></ndv-edit></p>
        <h4>Age</h4><p><ndv-edit [title]="'age'" [placeholder]="age" (onSave)="saveMethod($event)"></ndv-edit></p>
      </div>
    

      <footer class="footer">
        <p>angular2-click-to-edit</p>
      </footer>

    </div>
    `,
    directives: [NDV_DIRECTIVES]
})

export class AppComponent {
    firstName: String = 'Robert';
    lastName: String = 'Johnson';
    age: Number = 23;

    saveMethod(obj) {
        alert(' saved! the obj  - ' + JSON.stringify(obj));
    }

}