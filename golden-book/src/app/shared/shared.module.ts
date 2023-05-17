import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { SearchComponent } from './components/search/search.component';
import { ButtonComponent } from './components/button/button.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { MaterialModule } from './material/material.module';
import { TableComponent } from './components/table/table.component';
import { DialogModalComponent } from './components/dialog-modal/dialog-modal.component';
import { ShowErrorDirective } from './directives/show-error.directive';
import { ShortenPipe } from './pipes/shorten.pipe';
import { FormsModule } from '@angular/forms';
import { FullNamePipe } from './pipes/full-name.pipe';
import { CardComponent } from './components/card/card.component';
import { AddColorDirective } from './directives/add-color.directive';

const COMPONENTS = [
  DropdownComponent,
  SearchComponent,
  ButtonComponent,
  PaginationComponent,
  TableComponent,
  DialogModalComponent,
  CardComponent,
];

const DIRECTIVES = [ShowErrorDirective, AddColorDirective];

const PIPES = [ShortenPipe, FullNamePipe];
@NgModule({
  declarations: [...COMPONENTS, ...DIRECTIVES, ...PIPES],
  exports: [...COMPONENTS, ...DIRECTIVES, ...PIPES],
  imports: [CommonModule, MaterialModule, FormsModule],
})
export class SharedModule {}
