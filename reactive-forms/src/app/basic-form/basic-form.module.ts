import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicComponent } from './basic-form.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: BasicComponent }];

@NgModule({
  declarations: [BasicComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [],
  providers: [],
})
export class BasicModule {}
