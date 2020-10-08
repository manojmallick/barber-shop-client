import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';


@Component({
  selector: 'bs-app',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <bs-layout>
      <header>
        <bs-nav-item></bs-nav-item>
      </header>

      <main role="main">
        <router-outlet></router-outlet>
      </main>
      <bs-footer></bs-footer>
    </bs-layout>
  `,
})
export class AppComponent {
  showSidenav$: Observable<boolean>;
  loggedIn$: Observable<boolean>;

  constructor() {
  
  }
}
