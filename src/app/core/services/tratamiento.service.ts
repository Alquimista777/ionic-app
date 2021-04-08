import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TratamientoService {

  constructor() { }


  getTratamientos() {
    return  [
      { id: 1, img:'/assets/img/disnea.jpg', name: 'Disnea', icon: 'home', descripcion: `Es la sensación de falta de aire o dificultad para respirar...`, descripcionLarga: `La dificultad para respirar puede tener causas que no se deben a una enfermedad subyacente. Por ejemplo, el ejercicio, la altitud, usar ropa ajustada, estar acostado por mucho tiempo o el estilo de vida sedentario.` },
      { id: 2, img:'/assets/img/EstadoFisicoMal.jpg', name: 'Desacondicionamiento físico', icon: 'home', descripcion: `Es la perdida de condiciones fisiológicas y metabólicas de diversos sistemas...`, descripcionLarga: `El desacondicionamiento físico es una situación de pérdida de condiciones fisiológicas y meta- bólicas de diversos sistemas ocasionada por la permanencia en reposo, afecta los desempeños y posibilidades funcionales de la persona, y se presenta de manera frecuente en personas en Unidades de Cuidado Intensivo (UCI)` },
      { id: 3, img:'/assets/img/disnea.jpg', name: 'Atrofia muscular', icon: 'home', descripcion: 'Es la disminución del tamaño del musculo, afecta la perdida de fuerza...', descripcionLarga: `La atrofia muscular es un término médico que se refiere a la disminución del tamaño del músculo, perdiendo fuerza este debido a la relación con su masa. ​ Afecta a las células nerviosas de los músculos esqueléticos, generando parálisis. La parálisis puede ser parcial o completa y generalmente comienza insidiosamente.` },
      { id: 4, img:'/assets/img/disnea.jpg', name: 'Debilidad muscular adquirida en UCI', icon: 'home', descripcion: 'Es falta de fuerza en los músculos...', descripcionLarga: ` es la falta de fuerza en los músculos. Existen varias causas para esta condición, y se clasifican como debilidad muscular verdadera y debilidad muscular percibida.` },
      { id: 5, img:'/assets/img/disnea.jpg', name: 'Trastornos psicológicos', icon: 'home', descripcion: 'La fisioterapia en salud mental ayuda a mejorar las capacidades funcionales de las personas...', descripcionLarga: `Una amplia variedad de afecciones que afectan el estado de ánimo, el pensamiento y el comportamiento.` },
      { id: 6, img:'/assets/img/disnea.jpg', name: 'Afectación neurológica', icon: 'home', descripcion: 'El coronavirus entra en el SNC a través del bulbo olfativo, causando inflamación y desmielinización...', descripcionLarga: `La afectación neurológica se presenta en un 5%, en forma de vasculitis cerebral, mielopatía cervical, atrapamiento y compresión de los nervios periféricos y neuropatía producida por arteritis.` },
      { id: 7, img:'/assets/img/disnea.jpg', name: 'Afectaciones cardiacas', icon: 'home', descripcion: 'Casi una cuarta parte de los pacientes hospitalizados con COVID-19 ha sido diagnosticada...', descripcionLarga: `Los síntomas incluyen dificultad para respirar, fatiga, hinchazón en las piernas y ritmo cardíaco acelerado.` },
  
    ];
  }
}
