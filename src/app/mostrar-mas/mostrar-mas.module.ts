import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MostrarMasPageRoutingModule } from './mostrar-mas-routing.module';

import { MostrarMasPage } from './mostrar-mas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MostrarMasPageRoutingModule
  ],
  declarations: [MostrarMasPage]
})
export class MostrarMasPageModule {}
