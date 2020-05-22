import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'inicio',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent {
  @Input() items: any[] = [];

  private _loading = false;
  @Input()
  set loading(loading: boolean) {
    this._loading = loading;
  }
  get loading() {
    return this._loading;
  }
}
