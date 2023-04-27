import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-save-filter',
  templateUrl: './dialog-save-filter.component.html',
  styleUrls: ['./dialog-save-filter.component.scss'],
})
export class DialogSaveFilterComponent implements OnInit {
  constructor(private dialogRef: MatDialogRef<DialogSaveFilterComponent>) {}

  ngOnInit(): void {}

  onYes() {
    this.dialogRef.close(true);
  }

  onNo() {
    this.dialogRef.close(false);
  }
}
