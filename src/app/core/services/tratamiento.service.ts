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
                    nivel: 'basico',
                    urlVideo: 'kNVC0T09daQ',
                    nombre: 'Respiración completa',
                    detalle: 'Coloque la mano izquierda sobre su abdomen y la derecha sobre su pecho, observe como se mueven las manos al inhalar y exhalar. La mano que se encuentra en el abdomen suba cuando inhala y la mano que esta en el pecho se quede quieta, Recuerde inhalar por la nariz y exhalar por la boca. ',
                  },
                  {
                    id: 2,
                    nivel: 'basico',
                    urlVideo: 'R-vzFcpqb6c',
                    nombre: 'Estiramiento de la pared torácica',
                    detalle: 'Inhale por la nariz contando hasta 4, eleve y estire los brazos hacia adelante sobre su cabeza; exhale con los labios fruncidos, aleje las palmas de las manos y baje los brazos a los costados, repetir cuatro veces. ',
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
                    nivel: 'basico',
                    urlVideo: 'lI2hd9DcNR0',
                    detalle: `Semana 1, 5 minutos 5 veces al día
                    Semana 2, 10 minutos 3 veces al día 
                    Semana 3, 15 minutos 2 veces al día 
   `
                  },
                  {
                    id: 2,
                    nivel: 'basico',
                    urlVideo: 'NfCut3s0fFg',
                    nombre: 'Marcha de pie',
                    detalle: `Al estar de pie levantar la rodilla manteniéndola durante 2 segundos en el aire, bajarla y alternar con la otra, si necesita usar uno o los dos brazos como apoyo, realizarlo durante 30 segundos y descansar 30 segundos, realizar 5 series. `
                  },
                  {
                    id: 3,
                    nivel: 'basico',
                    urlVideo: 'G63opEo_SdI',
                    nombre: 'Pasos laterales',
                    detalle: `Estando de pie dar un paso lateral hacia un lado, seguir con la otra pierna, recuerda mantener una postura y posición adecuada, repetir 5 pasos en una dirección y luego cambiar de dirección; repetir durante 30 segundos.`
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
                    nivel: 'basico',
                    nombre: 'Al estar sentado',
                    urlVideo: 'NfCut3s0fFg',
                    detalle: 'Estirar la rodilla a 90º y realizar movimientos del pie hacia arriba y hacia abajo '
                  },
                  {
                    id: 2,
                    nivel: 'basico',
                    nombre: 'Al estar de pie',
                    urlVideo: 'uCoA8d8w1R4',
                    detalle: 'Levantarse en los dedos del pie mientras levanta los talones lo mas alto posible, pausa dos segundos, baja los talones y repite este movimiento arriba y abajo durante 30 segundos. '
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
                    nivel: 'basico',
                      nombre: 'Ejercicios de potenciación',
                      urlVideo: 'JGkAg8Z4NLU',
                      detalle: 'Realizar un trote lento durante 20 segundos e ir aumentado el tiempo a medida que se sienta a gusto.'
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