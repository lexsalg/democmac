import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'home',
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class Home implements OnInit {
  items = [];

  constructor() {}

  ngOnInit() {
    this.items = [
      {
        link: '/pages/solicitar',
        icon: 'assignment',
        name: 'Solicitudes'
      },
      {
        link: '/pages/retiros',
        icon: 'date_range',
        name: 'Ahorros'
      },
      {
        link: '/pages/depositos',
        icon: 'credit_card',
        name: 'Créditos'
      },
      {
        link: '/pages/solicitar',
        icon: 'description',
        name: 'Operaciones'
      },
      {
        link: '/pages/chart',
        icon: 'donut_small',
        name: 'Estadísticas'
      },
      {
        link: '/pages/depositos',
        icon: 'event_seat',
        name: 'Desembolsos'
      },
      {
        link: '/pages/solicitar',
        icon: 'extension',
        name: 'Retiros'
      },
      {
        link: '/pages/retiros',
        icon: 'flip_to_front',
        name: 'Desembolsos'
      },
      {
        link: '/pages/depositos',
        icon: 'home',
        name: 'Retiros'
      },
      {
        link: '/pages/solicitar',
        icon: 'horizontal_split',
        name: 'Solicitudes'
      },
      {
        link: '/pages/retiros',
        icon: 'drag_indicator',
        name: 'Desembolsos'
      },
      {
        link: '/pages/retiros',
        icon: 'list',
        name: 'Retiros'
      }
    ];
  }
}
