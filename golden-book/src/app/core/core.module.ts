import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SharedModule } from '../shared/shared.module';
import { MainGridComponent } from './main-grid/main-grid.component';
@NgModule({
  declarations: [FooterComponent, HeaderComponent, MainGridComponent],
  imports: [CommonModule, SharedModule],
  exports: [FooterComponent, HeaderComponent, MainGridComponent],
})
export class CoreModule {}
