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
  itemList = []
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private tratamientoService: TratamientoService,
    ) { }

  ngOnInit() {
   this.tratamiento = this.itemList.find(item => item.id === +this.activatedRoute.snapshot.paramMap.get('id'))
  }
  onRegresarMenuPrincipal() {
    this.router.navigateByUrl('/tabs/ejercicio')
  }
}
