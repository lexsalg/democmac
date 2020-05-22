import { Component } from '@angular/core';
import { IconService } from '@core/icon.service';
import { PreloaderService } from '@core/preloader.service';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent {
  constructor(private icons: IconService, private preloader: PreloaderService) {
    this.icons.init();
  }
  ngAfterViewInit() {
    setTimeout(() => this.preloader.hide(), 1000);
  }
}
