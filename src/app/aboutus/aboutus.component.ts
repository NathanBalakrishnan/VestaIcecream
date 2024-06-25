import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit, OnDestroy  {
  images: string[] = [
    '../../assets/img/shop1.jpeg',
    '../../assets/img/shop2.jpeg',
    '../../assets/img/shop3.jpeg'
  ];
  currentImage: string = this.images[0];
  currentIndex: number = 0;
  intervalId: any;

  ngOnInit() {
    this.startImageRotation();
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  startImageRotation() {
    this.intervalId = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
      this.currentImage = this.images[this.currentIndex];
    }, 3000); // Change image every 3 seconds
  }
}
