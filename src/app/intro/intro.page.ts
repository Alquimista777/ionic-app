import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { StorageService } from '../core/services/storage.service';
@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {
  slideOption = {
    initialSlide: 0,
    slidesPreview: 1,
    speed: 500,
    centeredSlides: true,
  }
  slides = [
    {
      btn: false,
      img: false,
      titulo: 'Introducción',
     descripcion: `Por la situación que actualmente pasamos debido a la pandemia causada por la COVID 19 
    muchas personas se han visto afectadas a nivel físico, psicológico y social, lo cual les ha causado problemas en sus diferentes 
    sistemas corporales y privándoles de su correcto funcionamiento. Con esta aplicación buscamos ayudar a la población que se ha visto mas afectada con la COVID 19
     después de adquirir esta enfermedad y requieren de una rehabilitación para mejorar el correcto funcionamiento de sus diferentes sistemas,
      con una serie de ejercicios que les ayudaran a mejorar tanto dificultades respiratorias como motoras.`},
    {
      btn: true,
      img: true,
      titulo: 'Bienvenido', 
      descripcion: 'Te damos la bienvenida a Postcovid rehabilitation, en nuestra aplicacion encontratas algunos tratamientos para las secuelas del Covid-19 y lo vas a ver enseguida.'
     },
  ]

  constructor(
    private router: Router,
    private storageService: StorageService,
    ) { }

  ngOnInit() {
    console.log('APP INTRO');

  }
  onOmitirIntro() {
    this.storageService.set('isFirstTime', false);
    this.router.navigateByUrl('/tabs/ejercicio');
  }
  onTerminarIntro() {
    this.storageService.set('isFirstTime', false);
    this.router.navigateByUrl('/tabs/ejercicio');
  }
}
