import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Plugins } from '@capacitor/core';
import { StorageService } from './core/services/storage.service';
import { Router } from '@angular/router';
const { App } = Plugins;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/folder/Home', icon: 'home' },
  ];
  constructor(
    private rotuer: Router,
    private platform: Platform,
    private storageService: StorageService) {
      console.log('APP COMPONENT');
      
      if (this.storageService.isFirstTimeLoaded()) {
        this.rotuer.navigateByUrl('/intro')
      } else {
        this.rotuer.navigateByUrl('/folder')
      }
    }

  onExitAplication() {
    App.exitApp();
  }
}
