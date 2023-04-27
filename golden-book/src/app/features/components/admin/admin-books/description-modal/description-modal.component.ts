import { Component, OnInit, Inject } from '@angular/core';
import { BookDetails } from 'src/app/features/models/book.model';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-description-modal',
  templateUrl: './description-modal.component.html',
  styleUrls: ['./description-modal.component.scss'],
})
export class DescriptionModalComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: BookDetails) {}

  ngOnInit(): void {}
}
