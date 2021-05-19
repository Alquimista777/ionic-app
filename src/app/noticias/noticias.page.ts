import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.page.html',
  styleUrls: ['./noticias.page.scss'],
})
export class NoticiasPage implements OnInit {
  slideOpts = {
    slidesPerView: 1.2,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    }
  }
  lista = [
    {
      url:'https://twitter.com/MinSaludCol/status/1270879954100764673?s=20',
      icon:'',
      descripcion:'La estrategia PRASS'
    },
    {
      url:'https://twitter.com/MinSaludCol/status/1291024159129178112?s=20',
      icon:'',
      descripcion:' Consejos para frenar la propagación'
    },
    {
      url:'https://twitter.com/MinSaludCol/status/1269373499975651328?s=20',
      icon:'',
      descripcion:' ¿Cuáles son los principales síntomas del virus?'
    },
    {
      url:'https://twitter.com/MinAmbienteCo/status/1249442166054637568?s=20',
      icon:'',
      descripcion:' Identifique los grupos de riesgo'
    },
    {
      url:'https://twitter.com/MinAmbienteCo/status/1247629368496664577?s=20',
      icon:'',
      descripcion:' ¿Por qué es importante quedarse en casa?'
    },
    {
      url:'https://twitter.com/MinSaludCol/status/1270385415439167489?s=20',
      icon:'',
      descripcion:'¿Qué hacer en caso de diagnóstico positivo?'
    },
  ];

  slides = [
    {
      url:'https://twitter.com/i/events/1362435731935748100',
      img:'/assets/img/uno.jpg',
      descripcion:'Científicos y expertos explican que las vacunas'
    },
    {
      url:'https://twitter.com/i/events/1362443308132261893',
      img:'/assets/img/dos.jpg',
      descripcion:'Ensayos demuestran que vacunas COVID-19 '
    },
    {
      url:'https://twitter.com/i/events/1362444371203743752',
      img:'/assets/img/tres.jpg',
      descripcion:'Así funcionan las vacunas contra la COVID-19'
    },
    {
      url:'https://twitter.com/i/events/1362446185219256321',
      img:'/assets/img/cuatro.jpg',
      descripcion:'Así se priorizan y distribuyen las vacunas contra'
    },

  ]
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  onAbrirUrl(url: string) {
    this.router.navigateByUrl(url)
  }

}
