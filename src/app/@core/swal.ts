import Swal from 'sweetalert2';

const toast = (Swal as any).mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 5000
});

export function notifyOk(title: string = 'Ok') {
  toast({
    type: 'success',
    title: `<span class="notifyok-title">${title}</span>`
  });
}
export function notifyInfo(title: string = 'Info', text: string = '') {
  toast({
    type: 'info',
    title: `<span class="notifyinfo-title">${title}</span>`,
    text: text,
    position: 'top'
  });
}
export function notifyWarn(title: string = 'Warning', text: string = '') {
  toast({
    type: 'warning',
    title: `<span class="notifywarn-title">${title}</span>`,
    text: text
  });
}

export function swalOk(
  title: string = 'Ok',
  text: string = 'Operación Exitosa!'
) {
  Swal.fire({
    title: `<span class="swalok-title">${title}</span>`,
    text: text,
    // type: 'success',
    icon: 'success',
    focusConfirm: false,
    confirmButtonColor: '#4caf50'
  });
}
export function swalError(
  title: string = 'Error',
  text: string = 'Ocurrió un error!'
) {
  Swal.fire({
    title: `<span class="swalerror-title">${title}</span>`,
    text: text,
    // type: 'error',
    icon: 'error',
    focusConfirm: false,
    confirmButtonColor: '#f44336'
  });
}

export function swalInfo(
  title: string = 'Info',
  text: string = 'Sin Contenido!'
) {
  Swal.fire({
    title: `<span class="cl-info fw-300">${title}</span>`,
    text: text,
    // type: 'info',
    icon: 'info',
    focusConfirm: false,
    confirmButtonColor: '#00bcd4'
  });
}
