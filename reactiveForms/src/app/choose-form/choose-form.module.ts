import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChooseFormRoutingModule } from './choose-form-routing.module';
import { ChooseFormComponent } from './choose-form.component';

@NgModule({
  declarations: [ChooseFormComponent],
  imports: [
    CommonModule,
    ChooseFormRoutingModule
  ]
})
export class ChooseFormModule { }
