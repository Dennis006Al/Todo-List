import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicComponent } from './basic-form.component';
import { RouterModule, Routes } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';

const routes: Routes = [{ path: '', component: BasicComponent }];

@NgModule({
  declarations: [BasicComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatIconModule,
  ],
  exports: [],
  providers: [],
})
export class BasicModule {}
