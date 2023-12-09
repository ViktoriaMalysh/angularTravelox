import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-congratulations',
  templateUrl: './congratulations.component.html',
  styleUrls: ['./congratulations.component.scss']
})
export class CongratulationsComponent {

  constructor(
    public dialogRef: MatDialogRef<CongratulationsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
  }

  closeModal() {
    this.dialogRef.close();
  }
}
