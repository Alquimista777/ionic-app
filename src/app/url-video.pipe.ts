import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { TratamientoService } from './core/services/tratamiento.service';

@Pipe({
  name: 'urlVideo'
})
export class UrlVideoPipe implements PipeTransform {
  constructor(
    public  sanitizer:DomSanitizer,
    private tratamientoService: TratamientoService,
  ) {

  }

  transform(code: string): unknown {
    return this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${code}`);
    // return this.sanitizer.sanitize()
  }

}
