import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TratamientoService {

  constructor() { }

  getSlides() {
    return {
        slides: [
          {
            id: 1,
            nombre: 'AFECTACIONES RESPIRATORIAS',
            tratamientos: [
              { 
                id: 1, 
                icon: 'home', 
                name: 'Disnea', 
                img:'/assets/img/man-sick.jpg', 
                subTitile: `Es la sensación de falta de aire o dificultad para respirar.`, 
                descripcionLarga: `La dificultad para respirar puede tener causas que no se deben a una enfermedad subyacente. Por ejemplo, el ejercicio, la altitud, usar ropa ajustada, estar acostado por mucho tiempo o el estilo de vida sedentario.`,
                planSemanal: [
                  {
                    id: 1,
                    nombre: 'Respiración completa',
                    detalle: 'Coloque la mano izquierda sobre su abdomen y la derecha...'
                  },
                  {
                    id: 2,
                    nombre: 'Estiramiento de la pared torácica',
                    detalle: 'Inhale por la nariz contando hasta 4...'
                  }
                ],
               },
            ]
          },
          {
            id: 2,
            nombre: 'COMPLICACIONES MOTORAS',
            tratamientos: [
              { id: 1, 
                icon: 'home', 
                img:'/assets/img/tired-woman.jpg', 
                name: 'Desacondicionamiento físico', 
                subTitile: `Es la perdida de condiciones fisiológicas.`, 
                descripcionLarga: `El desacondicionamiento físico es una situación de pérdida de condiciones fisiológicas y meta- bólicas de diversos sistemas ocasionada por la permanencia en reposo, afecta los desempeños y posibilidades funcionales de la persona, y se presenta de manera frecuente en personas en Unidades de Cuidado Intensivo (UCI)`,
                planSemanal: [
                  {
                    id: 1,
                    nombre: 'Caminar',
                    detalle: 'Semana 1, 5 minutos 5 veces al día...'
                  },
                  {
                    id: 2,
                    nombre: 'Marcha de pie',
                    detalle: ': Al estar de pie levantar la rodilla manteniéndola durante...'
                  },
                  {
                    id: 3,
                    nombre: 'Pasos laterales',
                    detalle: 'Estando de pie dar un paso lateral hacia un lado...'
                  }
                ], 
              },
            
             
              { 
                id: 2, 
                img:'/assets/img/atrofia.jpg', 
                name: 'Atrofia muscular', 
                icon: 'home', 
                subTitile: 'Es la disminución del tamaño del musculo, afecta la perdida de fuerza.', 
                descripcionLarga: `La atrofia muscular es un término médico que se refiere a la disminución del tamaño del músculo, perdiendo fuerza este debido a la relación con su masa. ​ Afecta a las células nerviosas de los músculos esqueléticos, generando parálisis. La parálisis puede ser parcial o completa y generalmente comienza insidiosamente.`,
                planSemanal: [
                  {
                    id: 1,
                    nombre: 'Al estar sentado ',
                    detalle: 'estirar la rodilla a 90º y realizar movimientos del pie hacia arriba y hacia abajo...'
                  },
                  {
                    id: 2,
                    nombre: 'Al estar de pie',
                    detalle: 'levantarse en los dedos del pie mientras levanta los talones lo mas alto posible...'
                  }
                ],
               },
                { 
                  id: 3, 
                  icon: 'home',
                  img:'/assets/img/debilidad-muscular.jpg', 
                  name: 'Debilidad muscular adquirida en UCI', 
                  subTitile: 'Es falta de fuerza en los músculos.',
                   descripcionLarga: ` es la falta de fuerza en los músculos. Existen varias causas para esta condición, y se clasifican como debilidad muscular verdadera y debilidad muscular percibida.`,
                   planSemanal: [
                    {
                      id: 1,
                      nombre: 'Ejercicios de potenciación',
                      detalle: 'Realizar un trote lento durante 20 segundos e ir aumentado ...'
                    },
                  ],
                  },      //   { id: 4, img:'/assets/img/psicologica.jpg', name: 'Trastornos psicológicos', icon: 'home', subTitile: 'La fisioterapia en salud mental ayuda a mejorar las capacidades funcionales de las personas.', descripcionLarga: `Una amplia variedad de afecciones que afectan el estado de ánimo, el pensamiento y el comportamiento.` },
              //   { id: 6, img:'/assets/img/neurologicas.jpg', name: 'Afectación neurológica', icon: 'home', subTitile: 'El coronavirus entra en el SNC a través del bulbo olfativo.', descripcionLarga: `La afectación neurológica se presenta en un 5%, en forma de vasculitis cerebral, mielopatía cervical, atrapamiento y compresión de los nervios periféricos y neuropatía producida por arteritis.` },
              //   { id: 7, img:'/assets/img/cardiaco.jpg', name: 'Afectaciones cardiacas', icon: 'home', subTitile: 'Casi una cuarta parte de los pacientes hospitalizados con COVID-19.', descripcionLarga: `Los síntomas incluyen dificultad para respirar, fatiga, hinchazón en las piernas y ritmo cardíaco acelerado.` },

            ]
          }
        ]
    }
  }
}