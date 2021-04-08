import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TratamientoPageRoutingModule } from './tratamiento-routing.module';

import { TratamientoPage } from './tratamiento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TratamientoPageRoutingModule
  ],
  declarations: [TratamientoPage]
})
export class TratamientoPageModule {}
