import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  ankita = 'angularRouting';
  constructor()
  {
    setTimeout(() =>
     {
      this.ankita = "changed titled";
     },2000);
  }
}