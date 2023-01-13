import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-full-form',
  templateUrl: './full-form.component.html',
  styleUrls: ['./full-form.component.scss'],
})
export class FullFormComponent implements OnInit {
  fullForm: FormGroup;
  hide = true;
  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.fullForm = this.initForm();
  }

  onSubmit(): void {
    console.log('Form -->', this.fullForm.value);
  }

  initForm(): FormGroup {
    return this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      deparment: [''],
      city: [''],
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      address: ['', Validators.minLength(15)],
      gender: ['', Validators.required],
      phone: [''],
      age: [''],
    });
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
}
