import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TratamientoService } from '../core/services/tratamiento.service';
import { VideoPlayer } from '@ionic-native/video-player/ngx';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-detalle-tratamiento',
  templateUrl: './detalle-tratamiento.page.html',
  styleUrls: ['./detalle-tratamiento.page.scss'],
})
export class DetalleTratamientoPage implements OnInit {
  detalle: any;
  tratamient
  idSlide: number = 0;
  idTratamiento: number = 0;
  videourl = 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4';
  itemList = []
  constructor(   
     private router: Router,
     public  sanitizer:DomSanitizer,
     private videoPlayer: VideoPlayer,
    private activatedRoute: ActivatedRoute,
    private tratamientoService: TratamientoService,) { }

  ngOnInit() {
    // this.videoPlayer.play('https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4').then(() => {
    //   console.log('video completed');
    //   }).catch(err => {
    //   console.log('ERORRRR',err);
    //   });

    this.itemList = this.tratamientoService.getSlides().slides;
    this.idSlide =  +this.activatedRoute.snapshot.paramMap.get('id');
    this.idTratamiento =  +this.activatedRoute.snapshot.paramMap.get('id2');
    const idPlan =  +this.activatedRoute.snapshot.paramMap.get('id3');


   this.detalle = this.itemList
   .find(slides => slides.id === this.idSlide).tratamientos
   .find(item => item.id === this.idTratamiento).planSemanal
   .find(plan => plan.id === idPlan)
  }
  onRegresarMenuPrincipal() {
    this.router.navigate(['/tratamiento', this.idSlide, this.idTratamiento])
  }
}
