import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { StorageService } from '../services/storage.service';

@Injectable({
  providedIn: 'root'
})
export class IntroCanDdeactivateGuard implements CanActivate {

  constructor(
    private router: Router,
    private storageService: StorageService,
  ){}

  async canActivate(){   
    const isFirstTime = await this.storageService.get('isFirstTime'); 
    if  (!isFirstTime) {
      console.log('FALLLso');
      
      this.router.navigateByUrl('/folder');
      return false;
    } else {
      return true;
    }
  }
}
