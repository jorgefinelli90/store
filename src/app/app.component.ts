import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Store';
  test = 'Test';

  getNAme(): void {
    console.log('Hola Jorr');
  }
}
