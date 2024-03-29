import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TratamientoService } from '../core/services/tratamiento.service';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
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
  public folder: string;
  constructor(
    private router: Router,
    private tratamientoService: TratamientoService,

    ) { }

  ngOnInit() {

  }
  onVerTratamiento(idSlide: number, idTratamiento) {
    this.router.navigate(['/tratamiento',  idSlide, idTratamiento])
  }

  onItemClick(item: any) {
    
  }
  onVerMas(idSlide) {
   this.router.navigate(['/mostrar-mas', idSlide])
  }

  onBack() {
    this.router.navigateByUrl('/intro')
  }

}
