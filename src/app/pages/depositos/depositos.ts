import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'depositos',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './depositos.html',
  styleUrls: ['./depositos.scss'],
})
export class Depositos {
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
