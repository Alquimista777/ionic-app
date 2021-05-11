import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TratamientoService } from '../core/services/tratamiento.service';

@Component({
  selector: 'app-mostrar-mas',
  templateUrl: './mostrar-mas.page.html',
  styleUrls: ['./mostrar-mas.page.scss'],
})
export class MostrarMasPage implements OnInit {
  itemList = []
  tratamiento: any;
  idSlide: number = 0;
  constructor( 
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private tratamientoService: TratamientoService,
    ) { }

  ngOnInit() {
    this.itemList = this.tratamientoService.getSlides().slides;
    this.idSlide =  +this.activatedRoute.snapshot.paramMap.get('id');
   this.tratamiento = this.itemList.find(slides => slides.id === this.idSlide).tratamientos;
  }

  onVerTratamiento(idSlide: number, idTratamiento: number) {
    this.router.navigate(['/tratamiento',  idSlide, idTratamiento])
  }

  onRegresarMenuPrincipal() {
    this.router.navigateByUrl('/tabs/ejercicio')
  }
}
