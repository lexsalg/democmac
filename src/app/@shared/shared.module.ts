import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@core/material.module';

const MODULES = [MaterialModule];
const ENTRIES = [];
const COMPONENTS = [...[ENTRIES]];

@NgModule({
  declarations: [...COMPONENTS],
  entryComponents: [...ENTRIES],
  imports: [
    ...MODULES,
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [...MODULES, ...COMPONENTS]
})
export class SharedModule {}
