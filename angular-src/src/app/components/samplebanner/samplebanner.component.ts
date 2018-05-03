import { Component, OnInit } from '@angular/core';
import { NgxCarousel } from 'ngx-carousel';

@Component({
  selector: 'app-samplebanner',
  templateUrl: './samplebanner.component.html',
  styleUrls: ['./samplebanner.component.scss']
})
export class SamplebannerComponent implements OnInit {

  public carouselOne: NgxCarousel;
  public carouselTile: NgxCarousel;
  public carouselTileItems: Array<any>;

  constructor() { }

  ngOnInit() {
    this.carouselOne = {
      grid: {xs: 1, sm: 1, md: 1, lg: 1, all: 0},
      slide: 1,
      speed: 400,
      interval: 4000,
      point: {
        visible: true
      },
      load: 2,
      touch: true,
      loop: true,
      custom: 'banner'
      }
    this.carouselTileItems = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

    this.carouselTile = {
      grid: {xs: 2, sm: 3, md: 3, lg: 5, all: 0},
      slide: 2,
      speed: 400,
      animation: 'lazy',
      point: {
        visible: true
      },
      load: 2,
      touch: true,
      easing: 'ease'
      }

    }
  }

  // public myfunc(event: Event) {
  //    // carouselLoad will trigger this funnction when your load value reaches
  //    // it is helps to load the data by parts to increase the performance of the app
  //    // must use feature to all carousel
  // }
