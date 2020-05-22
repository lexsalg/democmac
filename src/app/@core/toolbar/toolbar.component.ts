import { Component, Input, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';

import { RouterState } from '@ngxs/router-plugin';
import { Observable } from 'rxjs';

import { MatSidenav } from '@angular/material';
import { AuthState } from '@core/auth/state/auth.state';
import { Usuario } from '@core/auth/usuario';
import { map } from 'rxjs/operators';

@Component({
  selector: 'ngx-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  @Select(AuthState.usuario)
  usuario$: Observable<Usuario>;
  crumbs$;

  @Select(state => state.router.state.url)
  url$: Observable<string>;

  @Input()
  sidenav: MatSidenav;
  isFullscreen = false;

  constructor(private store: Store) {}

  ngOnInit() {
    this.crumbs$ = this.store.select<any>(RouterState.state).pipe(
      map(state =>
        Array.from(state.breadcrumbs, ([key, value]) => ({
          name: key,
          link: '/' + value
        }))
      )
    );
  }
}
