import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// ngrx
import { SharedModule } from '@shared/shared.module';
import { PagesRouting } from './pages.routing';
import { Pages } from './pages';
import { MenuItem } from '@core/navigator/menu-item.model';
import { InicioPage, InicioComponent } from './inicio';
import { Retiros } from './retiros/retiros';
import { ModalRetiro } from './retiros/modal-retiro';
import { Formulario } from './formulario/formulario';
import { Home } from './home/home';
import { Depositos } from './depositos/depositos';
import { NgApexchartsModule } from 'ng-apexcharts';
import { Chart } from './chart/chart';
import { Chart1 } from './chart1/chart';
import { Chart2 } from './chart2/chart';
const MODULES = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  PagesRouting,
  SharedModule,
  NgApexchartsModule
];
const COMPONENTS = [
  Pages,
  InicioPage,
  InicioComponent,
  Retiros,
  ModalRetiro,
  Formulario,
  Home,
  Depositos,
  Chart,
  Chart1,
  Chart2
];
const PROVIDERS = [];
@NgModule({
  imports: [...MODULES],
  entryComponents: [ModalRetiro],
  declarations: [...COMPONENTS],
  providers: [...PROVIDERS]
})
export class PagesModule {}
