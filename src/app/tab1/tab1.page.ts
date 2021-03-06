import { Component,  OnInit } from '@angular/core';
import { Pelicula, RespuestaMDB} from '../interfaces/interface'
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  peliculasRecientes: Pelicula[]=[];
  
  slideOpts = {
    slidesPerView: 1.1,
    freeMode: true
  }

  constructor(private moviesService: MoviesService) {}

  ngOnInit(){
    this.moviesService.getFeatures()
    .subscribe((resp: RespuestaMDB)=>{
      console.log('Respuesta', resp);
      this.peliculasRecientes = resp.results;
    });
  }
  
}