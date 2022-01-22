import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'recipe-app';
  featureName: string = 'recipe';

  onNavigate(featureName: string) {
    this.featureName = featureName;
  }
}
