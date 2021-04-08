import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { StorageService } from '../core/services/storage.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {
  private _storage: Storage | null = null;

  slides = [
    {titulo: 'Bienvenido', descripcion: 'Te damos la bienvenida a Postcovid rehabilitation, en nuestra aplicacion encontratas algunos tratamientos para las secuelas del Covid-19 y lo vas a ver enseguida.', imgUrl: '/assets/img/covid-19.jpg', btn: false},
    {titulo: '¿Que es Stop covid?', descripcion: 'Una aplicacion que te ayudara a mejorar tu salud, sabemos que el Covid-19  afecto a muhcas personas y nuestra mision es ayudar a todas las personas a su correcta rehabilitacion de las secuelas, es por ti y para ti.', imgUrl: '/assets/img/covid-19.jpg', btn: false},
    {titulo: 'Planteamiento del problema', descripcion:`La COVID 19 es una enfermedad que se descubrió más recientemente afectando a todo el mundo manifestándose como una pandemia con un total de casos de 117,2 millones, es una enfermedad infecciosa que ataca el sistema respiratorio, partes del sistema neurológico, al igual que a diferentes órganos como corazón, hígado y riñones. `, imgUrl: '/assets/img/covid-19.jpg', btn: false},
    {titulo: '¿Listo para iniciar?', descripcion: '', imgUrl: '/assets/img/covid-19.jpg', btn: true},
  ]
  constructor(
    private router: Router,
    private storageService: StorageService,
    ) { }

  ngOnInit() {

  }

  onTerminarIntro() {
    this.storageService.set('isIntroTerminada', true)
    this.router.navigateByUrl('/folder');
  }
}
