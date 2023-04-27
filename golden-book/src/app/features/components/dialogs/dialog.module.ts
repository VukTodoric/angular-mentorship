import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogSaveFilterComponent } from './dialog-save-filter/dialog-save-filter.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/shared/material/material.module';

@NgModule({
  declarations: [DialogSaveFilterComponent],
  imports: [CommonModule, SharedModule, MaterialModule],
})
export class DialogModule {}
