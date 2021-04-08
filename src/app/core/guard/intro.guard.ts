import { Injectable } from '@angular/core';
import { CanActivate, CanDeactivate, Router } from '@angular/router';
import { StorageService } from '../services/storage.service';


@Injectable({
  providedIn: 'root'
})
export class IntroGuard implements CanActivate {

  constructor(
    private router: Router,
    private storageService: StorageService,
  ){}

  async canActivate(): Promise<boolean> {
    console.log('LOOO')
    const isIntroTerminada = await this.storageService.get('isIntroTerminada');   
    if (isIntroTerminada) {
      return true;
    } else {
      this.router.navigateByUrl('/intro')
    }
  }
}
