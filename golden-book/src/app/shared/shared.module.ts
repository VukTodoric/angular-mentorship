import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { SearchComponent } from './components/search/search.component';
import { ButtonComponent } from './components/button/button.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { MaterialModule } from './material/material.module';
import { TableComponent } from './components/table/table.component';
import { DialogModalComponent } from './components/dialog-modal/dialog-modal.component';

const COMPONENTS = [
  DropdownComponent,
  SearchComponent,
  ButtonComponent,
  PaginationComponent,
  TableComponent,
  DialogModalComponent,
];
@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
  imports: [CommonModule, MaterialModule],
})
export class SharedModule {}
