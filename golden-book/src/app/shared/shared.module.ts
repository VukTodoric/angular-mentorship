import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { SearchComponent } from './components/search/search.component';
import { ButtonComponent } from './components/button/button.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { MaterialModule } from './material/material.module';
import { AppRoutingModule } from '../app-routing.module';
import { SideBarComponent } from './components/side-bar/side-bar.component';

@NgModule({
  declarations: [
    DropdownComponent,
    SearchComponent,
    ButtonComponent,
    PaginationComponent,
    SideBarComponent,
  ],
  exports: [
    DropdownComponent,
    SearchComponent,
    ButtonComponent,
    PaginationComponent,
    SideBarComponent,
  ],
  imports: [CommonModule, MaterialModule, AppRoutingModule],
})
export class SharedModule {}
