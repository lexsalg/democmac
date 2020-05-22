import {
  Component,
  Input,
  ChangeDetectionStrategy,
  OnInit
} from '@angular/core';
import { FormControl } from '@angular/forms';

// import { PagesService } from '../pages.service';
import { Observable, timer } from 'rxjs';
import { startWith, map, tap } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { ModalRetiro } from './modal-retiro';
import { PagesService } from '../pages.service';
import { User } from '@models/user';
import Swal from 'sweetalert2';
import { swalOk } from '@core/swal';

@Component({
  selector: 'retiros',
  // changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './retiros.html',
  styleUrls: ['./retiros.scss']
})
export class Retiros implements OnInit {
  @Input() items: any[] = [];
  myControl = new FormControl();

  filteredOptions: Observable<string[]>;

  users: User[] = [];

  user;
  monto = 0;
  loading = false;

  constructor(private api: PagesService, public dialog: MatDialog) {}

  ngOnInit() {
    this.filtro();
    this.getUusers();
  }

  getUusers() {
    this.api.getUsers().subscribe(
      (res) => {
        this.users = res;
        console.log(this.users);
      },
      (err) => console.log(err)
    );
  }

  filtro() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value))
    );
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.users
      .map((u) => u.username)
      .filter((user) => user.toLowerCase().includes(filterValue));
  }

  abrir(): void {
    this.loading = true;
    this.api.fake().subscribe(() => {
      this.loading = false;
      this.open();
    });
  }

  open() {
    const dialogRef = this.dialog.open(ModalRetiro, {
      width: '720px',
      data: { name: 'this.name', animal: 'assad' }
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      this.user = {
        nombre: 'Alexis Salgado',
        numero: '106-01-232-13213213',
        tipo: 'Individual',
        relacion: 'Titular'
      };
    });
  }
  itf(val) {
    if (val) this.monto = this.monto + 0.5;
    else this.monto = this.monto - 0.5;
  }
  save() {
    Swal.fire({
      icon: 'question',
      confirmButtonText: 'Retirar',
      cancelButtonText: 'Cancelar',
      showCancelButton: true,
      title: `<span class="cl-question fw-300">Realizar retiro de:</span>`,
      text: `S/ ${this.monto}.00`,
      focusConfirm: false,
      confirmButtonColor: '#00bcd4'
    })

      .then((val) => {
        if (val.value) {
          swalOk('Mensaje', 'Retiro Realizado!');
        }
        this.cancelar();
      })
      .catch((_) => {});
  }
  cancelar() {
    this.user = null;
    this.monto = 0;
    this.loading = false;
  }
}
