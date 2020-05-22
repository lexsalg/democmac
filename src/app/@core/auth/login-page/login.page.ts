import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';

import { Authenticate } from '../usuario';
import { Login } from '../state/auth.action';
import { Router } from '@angular/router';

@Component({
  selector: 'login-page',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
  titulo: string;
  footer: string;
  @Select(state => state.auth.pending)
  pending$: Observable<boolean>;

  @Select(state => state.auth.errorMessage)
  error$: Observable<string>;

  constructor(private store: Store,private router:Router) {}

  ngOnInit() {
    this.titulo = 'SICMAC - WEB';
    this.footer = `CMAC-CUSCO © ${new Date().getFullYear()} v0.0.1 | Todos los derechos reservados.`;
  }

  onSubmit($event: Authenticate) {
    this.store.dispatch(new Login($event));
    setTimeout(() => {
      this.router.navigate(['/pages'])
    }, 1200);
  }
}
