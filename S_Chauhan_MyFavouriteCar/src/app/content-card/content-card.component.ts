import { Component } from '@angular/core';
import { ContentList } from '../helper-files/content-list';

@Component({
  selector: 'app-content-card',
  standalone: true,
  imports: [],
  templateUrl: './content-card.component.html',
  styleUrl: './content-card.component.scss'
})
export class ContentCardComponent {
  contentList: ContentList = new ContentList();

  constructor(){
    this.contentList.addContent({
      id: 0,
      title: "Ferrari SF90",
      description:"The Ferrari SF90 Stradale is a high-performance plug-in hybrid hypercar",
      creator:"Ferrari",
      imgURL:"https://cdn.ferrari.com/cms/network/media/img/resize/5d1f10968a2538547edce275-m-dinamica-2400x4350-040719?width=768&height=1024",
      type:"Hybrid Sports Car"
    });
    this.contentList.addContent({
      id: 1,
      title: "Porsche 911 Carrera",
      description:"he Porsche 911 Carrera is an iconic sports car recognized for its timeless design",
      creator:"Porsche",
      imgURL:"https://files.porsche.com/filestore/image/multimedia/none/992-carrera-t-modelexplorer/normal/b34fb743-4ede-11ed-80f7-005056bbdc38;sS;twebp065/porsche-normal.webp",
    });
    this.contentList.addContent({
      id: 2,
      title: "Tesla Model 3",
      description:"The Tesla Model 3 is an all-electric compact sedan",
      creator:"Tesla",
      imgURL:"https://cdn.carbuzz.com/car-thumbnails/700x375/15000/100/15123.jpg",
      type:"Electri Sedan"
    });
  }
}
