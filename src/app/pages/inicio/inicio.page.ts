import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'inicio-page',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss']
})
export class InicioPage implements OnInit {
  items: any;
  loading = false;

  cajacusco: string;
  constructor() {
    this.cajacusco = `Caja Municipal de Ahorro y Crédito Cusco S.A. © ${new Date().getFullYear()} | Todos los derechos reservados.`;
  }

  ngOnInit() {
    setTimeout(() => this.getMenu());
  }
  ngOnDestroy() {}

  getMenu() {
    this.loading = true;
  }
}
