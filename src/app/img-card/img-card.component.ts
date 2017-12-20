import { CatImage } from './catImage.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-img-card',
  templateUrl: './img-card.component.html',
  styleUrls: ['./img-card.component.css']
})



export class ImgCardComponent implements OnInit {

  private image: CatImage = {
    message: 'Progressive Web Cat',
    api: 'https://cataas.com/cat/says/',
    fontsize: 20
  };
  public src: string;

  constructor() {

   }

  ngOnInit() {
    this.generateSrc();
  }

  generateSrc(): void {
    this.src = this.image.api + this.image.message + '?ts=' + Date.now();
  }

}
