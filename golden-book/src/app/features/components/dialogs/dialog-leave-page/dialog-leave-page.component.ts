import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-leave-page',
  templateUrl: './dialog-leave-page.component.html',
  styleUrls: ['./dialog-leave-page.component.scss'],
})
export class DialogLeavePageComponent implements OnInit {
  constructor(private dialogRef: MatDialogRef<DialogLeavePageComponent>) {}

  ngOnInit(): void {}

  onOK() {
    this.dialogRef.close(true);
  }

  onCancel() {
    this.dialogRef.close(false);
  }
}
