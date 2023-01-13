import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.scss'],
})
export class BasicComponent implements OnInit {
  basicForm: FormGroup;
  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.basicForm = this.initForm();
  }

  onSubmit(): void {
    console.log('Form -->', this.basicForm.value);
  }

  openSnackBar() {
    this._snackBar.open('Form Send Successfully', 'Undo', {
      duration: 3000,
      panelClass: ['success-snackbar'],
    });
  }

  requiredSnackBar() {
    this._snackBar.open('All fields are required', 'Close', {
      duration: 3500,
      panelClass: ['error-snackbar'],
    });
  }


  initForm(): FormGroup {
    return this.fb.group({
      firstName: ['', [Validators.minLength(3), Validators.required]],
      lastName: ['', Validators.required],
      deparment: ['', Validators.required],
      city: ['', Validators.required],
    });
  }
}
