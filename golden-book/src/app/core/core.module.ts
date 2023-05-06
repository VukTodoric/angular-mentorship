import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SharedModule } from '../shared/shared.module';
import { MainGridComponent } from './components/main-grid/main-grid.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { MaterialModule } from '../shared/material/material.module';
import { AppRoutingModule } from '../app-routing.module';
import { LoginComponent } from './auth/components/login/login.component';
import { FormsModule } from '@angular/forms';

const COMPONETS = [
  FooterComponent,
  HeaderComponent,
  MainGridComponent,
  SideBarComponent,
  LoginComponent,
];
@NgModule({
  declarations: [...COMPONETS],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    AppRoutingModule,
    FormsModule,
  ],
  exports: [...COMPONETS],
})
export class CoreModule {}
