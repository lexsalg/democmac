import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './loading.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';
import { LoadingService } from './loading.service';

@NgModule({
  imports: [CommonModule, MatProgressSpinnerModule, MatDialogModule],
  declarations: [LoadingComponent],
  entryComponents: [LoadingComponent]
})
export class LoadingModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: LoadingModule,
      providers: [LoadingService]
    };
  }
}
