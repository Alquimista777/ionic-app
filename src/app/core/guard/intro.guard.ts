import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { StorageService } from '../services/storage.service';


@Injectable({
  providedIn: 'root'
})
export class IntroGuard implements CanActivate {

  constructor(
    private router: Router,
    private storageService: StorageService,
  ){}

  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    const isFirstTime = false;
    // const isFirstTime = await this.storageService.get('isFirstTime'); 
    if (!isFirstTime) {
      return true;
    } else {
      this.router.navigateByUrl('/intro')
    }
  }
}
