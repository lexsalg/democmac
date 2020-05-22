import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoleGuard } from '@core/auth/auth.guard';

import { Pages } from './pages';
import { InicioPage, InicioComponent } from './inicio';
import { Retiros } from './retiros/retiros';
import { Formulario } from './formulario/formulario';
import { Home } from './home/home';
import { Depositos } from './depositos/depositos';
import { Chart } from './chart/chart';

// roles que tiene acceso a las rutas
// const data = { rol: ['30031'] };

const routes: Routes = [
  {
    path: '',
    component: InicioPage,
    // canActivateChild: [RoleGuard],
    // data: { title: 'Inicio' },
    children: [
      { path: '', component: Home },
      { path: 'retiros', component: Retiros },
      { path: 'depositos', component: Depositos },
      { path: 'solicitar', component: Formulario },
      { path: 'chart', component: Chart }

      // {
      //   path: 'sessions',
      //   loadChildren: () =>
      //     import('./sessions/sessions.module').then((m) => m.SessionsModule),
      //   data: { title: 'Sessions' }
      // }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRouting {}
