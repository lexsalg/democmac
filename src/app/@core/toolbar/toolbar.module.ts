import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ToolbarComponent } from './toolbar.component';

import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { UserMenuComponent } from './components/user-menu/user-menu.component';
import { SidenavToggleComponent } from './components/sidenav-toggle/sidenav-toggle.component';
import { FullscreenToggleComponent } from './components/fullscreen-toggle/fullscreen-toggle.component';

import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';

import { MatToolbarModule } from '@angular/material/toolbar';
import { ClickOutsideDirective } from './components/click-outside.directive';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BreadcrumbsModule } from '@core/breadcrumbs/breadcrumbs.module';

const MATERIAL_MODULES = [
  MatIconModule,
  MatInputModule,
  MatMenuModule,
  MatListModule,
  MatDividerModule,
  MatToolbarModule,
  FlexLayoutModule
];

@NgModule({
  imports: [CommonModule, RouterModule, ...MATERIAL_MODULES, BreadcrumbsModule],
  exports: [ToolbarComponent],
  declarations: [
    ToolbarComponent,
    SearchBarComponent,
    UserMenuComponent,
    FullscreenToggleComponent,
    SidenavToggleComponent,
    ClickOutsideDirective
  ]
})
export class ToolbarModule {}
