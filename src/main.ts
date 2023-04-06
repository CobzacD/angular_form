import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <h1> {{name}} vă salută. <br/>Bine ați venit pe pagina mea!</h1>
     `,
})
export class App {
  name = 'Cobzac Diana';
}

bootstrapApplication(App);
