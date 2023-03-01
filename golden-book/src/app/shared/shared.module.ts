import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TileComponent } from './components/tile/tile.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { SearchComponent } from './components/search/search.component';
import { ButtonComponent } from './components/button/button.component';
import { PaginationComponent } from './components/pagination/pagination.component';

@NgModule({
  declarations: [
    TileComponent,
    DropdownComponent,
    SearchComponent,
    ButtonComponent,
    PaginationComponent,
  ],
  imports: [CommonModule],
  exports: [
    TileComponent,
    DropdownComponent,
    SearchComponent,
    ButtonComponent,
    PaginationComponent,
  ],
})
export class SharedModule {}
