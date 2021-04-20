import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TratamientoService } from '../core/services/tratamiento.service';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;

  public itemList = [];
  constructor(
    private router: Router,
    private tratamientoService: TratamientoService,

    ) { }

  ngOnInit() {
    console.log('APP FOLDER');

    this.itemList = this.tratamientoService.getTratamientos();
  }
  onVerTratamiento(id: number) {
    this.router.navigate(['/tratamiento', id])
  }

  onItemClick(item: any) {
    
  }

  onBack() {
    console.log('BACK');
    
    this.router.navigateByUrl('/intro')
  }

}
