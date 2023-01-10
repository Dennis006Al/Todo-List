import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { GeneralFormComponent } from './general-form/general-form.component';
import { FullFormComponent } from './full-form/full-form.component';


@NgModule({
  declarations: [GeneralFormComponent, FullFormComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
