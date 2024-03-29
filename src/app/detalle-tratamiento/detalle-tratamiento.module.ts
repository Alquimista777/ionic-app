import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleTratamientoPageRoutingModule } from './detalle-tratamiento-routing.module';

import { DetalleTratamientoPage } from './detalle-tratamiento.page';
import { UrlVideoPipe } from '../url-video.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleTratamientoPageRoutingModule
  ],
  declarations: [
    DetalleTratamientoPage,
    UrlVideoPipe
  ]
})
export class DetalleTratamientoPageModule {}
