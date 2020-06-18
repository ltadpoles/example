import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  condition: boolean = false;
  birthday: Date = new Date()
  color: string;
  title = 'base-demo';
}
