import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TratamientoService } from '../core/services/tratamiento.service';

@Component({
  selector: 'app-tratamiento',
  templateUrl: './tratamiento.page.html',
  styleUrls: ['./tratamiento.page.scss'],
})
export class TratamientoPage implements OnInit {
  tratamiento: any;
  tratamient
  idSlide: number = 0;
  idTratamiento: number = 0;
  itemList = []
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private tratamientoService: TratamientoService,
    ) { }

  ngOnInit() {
    this.itemList = this.tratamientoService.getSlides().slides;
    this.idSlide =  +this.activatedRoute.snapshot.paramMap.get('id');
    this.idTratamiento =  +this.activatedRoute.snapshot.paramMap.get('id2');
   this.tratamiento = this.itemList.find(slides => slides.id === this.idSlide).tratamientos.find(item => item.id === this.idTratamiento)
   
  }
  onRegresarMenuPrincipal() {
    this.router.navigateByUrl('/tabs/ejercicio')
  }
  onVerDetalle(id: number) {
    this.router.navigate(['/detalle-tratamiento', this.idSlide, this.idTratamiento, id])
  }
}
