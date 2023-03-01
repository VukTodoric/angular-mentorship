import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../features/header/header.component';
import { MainGridComponent } from '../features/main-grid/main-grid.component';
import { FooterComponent } from '../features/footer/footer.component';
import { SharedModule } from '../shared/shared.module';
import { MainGridModule } from '../features/main-grid/main-grid.module';

@NgModule({
  declarations: [FooterComponent, MainGridComponent, HeaderComponent],
  imports: [CommonModule, SharedModule, MainGridModule],
  exports: [FooterComponent, MainGridComponent, HeaderComponent],
})
export class CoreModule {}
