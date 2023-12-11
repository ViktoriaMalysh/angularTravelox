import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import * as dayjs from 'dayjs'

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-form-booking',
  templateUrl: './form-booking.component.html',
  styleUrls: ['./form-booking.component.scss']
})
export class FormBookingComponent {
  public formBooking: FormGroup;
  public matcher = new MyErrorStateMatcher();

  constructor(
    public dialogRef: MatDialogRef<FormBookingComponent>,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: {name: string, price: string},
  ) {
    this.formBooking = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      secondName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      date_start: ['', [Validators.required]],
      date_end: ['', [Validators.required]],
      cardNumber: ['', [Validators.required, Validators.maxLength(16)]],
      cardMonYear: ['', [Validators.required]],
      cardCVC: ['', [Validators.required, Validators.maxLength(3)]],
    })
  }

  onYesClick(): void {
    this.formBooking.markAllAsTouched();
    console.info('this.formBooking.value: ', this.formBooking.value)
    if (this.formBooking.invalid) {
      return;
    }
    this.dialogRef.close({
      result: 'success',
      data:
        {
          ...this.formBooking.value, ...this.data,
          date_start: dayjs(this.formBooking.get('date_start')?.value).format('DD.MM.YYYY'),
          date_end: dayjs(this.formBooking.get('date_end')?.value).format('DD.MM.YYYY')
        }
    });
  }

  onNoClick(): void {
    this.dialogRef.close({
      result: 'error',
      data: null
    });
  }
}
