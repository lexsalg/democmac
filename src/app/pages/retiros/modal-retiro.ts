import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { swalOk, swalInfo } from '@core/swal';

@Component({
  selector: 'modal-retiro',
  templateUrl: 'modal-retiro.html'
})
export class ModalRetiro {
  constructor(
    public dialogRef: MatDialogRef<ModalRetiro>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  displayedColumns: string[] = ['position', 'numero', 'relacion', 'estado','acciones'];
  dataSource = ELEMENT_DATA;

  editar(){
    swalInfo('Se editó Correctamente');

  }
  eliminar(){
    swalOk('Se eliminó Correctamente')
  }
}
export interface DialogData {
  animal: string;
  name: string;
}
const ELEMENT_DATA: Cuenta[] = [
  { position: 1, relacion: 'Titular', numero:'10623000002321323123', saldo: 1.0079, estado: 'ACTIVA' },
  { position: 2, relacion: 'Titular',   numero:'10623000002321323123', saldo: 4.0026, estado: 'ACTIVA' },
  { position: 3, relacion: 'Titular',  numero:'10623000002321323123', saldo: 6.941, estado: 'BLOQUEADA' },
  { position: 4, relacion: 'Titular',numero:'10623000002321323123', saldo: 9.0122, estado: 'ACTIVA' }
];
export interface Cuenta {
  position: number;
  relacion: string;
  numero: string;
  saldo: number;
  estado: string;
}
