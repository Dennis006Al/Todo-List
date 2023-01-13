import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullFormComponent } from './full-form.component';
import { RouterModule, Routes } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';

const routes: Routes = [{ path: '', component: FullFormComponent }];

@NgModule({
  declarations: [FullFormComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSnackBarModule,
    MatRadioModule,
    MatCheckboxModule
  ],
  exports: [],
  providers: [],
})
export class FullModule {}
