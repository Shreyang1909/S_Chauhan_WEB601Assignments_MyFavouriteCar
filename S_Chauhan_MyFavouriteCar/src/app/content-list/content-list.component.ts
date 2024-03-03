import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { ContentCardComponent } from '../content-card/content-card.component';
import { TypegiverPipe } from '../typegiver.pipe';
import { FormsModule } from '@angular/forms';
import { HoverAffectDirective } from '../hover-affect.directive';
import { CreateContentComponent } from '../create-content/create-content.component';

@Component({
  selector: 'app-content-list',
  standalone: true,
  imports: [CommonModule, ContentCardComponent, TypegiverPipe, FormsModule, HoverAffectDirective, CreateContentComponent],
  templateUrl: './content-list.component.html',
  styleUrl: './content-list.component.scss'
})
export class ContentListComponent implements OnInit {
  DisplayContentInformation(contentItem: Content) {
    console.log(`ID: ${contentItem.id} and Title: ${contentItem.title}`);
    }
  @Input () contentItems: Content[] = [];

  searchTitle: string = '';
  contentExists: boolean = false;
  message: string = '';  
  selectedTitle: string | null = null;

  checkContentExists() {
    const foundItem = this.contentItems.find(item => item.title.toLowerCase() === this.searchTitle.toLowerCase());
    this.contentExists = !!foundItem;
    this.message = foundItem ? 'Content item exists.' : 'Content item does not exist.';
    this.selectedTitle = foundItem ? foundItem.title : null;
  }


  ngOnInit(): void {
    this.contentItems =[
      {
        id: 0,
        title: "Ferrari SF90",
        description:"The Ferrari SF90 Stradale is a high-performance plug-in hybrid hypercar",
        creator:"Ferrari",
        imgURL:"https://cdn.ferrari.com/cms/network/media/img/resize/5d1f10968a2538547edce275-m-dinamica-2400x4350-040719?width=768&height=1024",
        type:"Sports",
        tags: ["sports", "ferrariworld"]
      },
      {
        id: 1,
        title: "Porsche 911 Carrera",
        description:"he Porsche 911 Carrera is an iconic sports car recognized for its timeless design",
        creator:"Porsche",
        imgURL:"https://files.porsche.com/filestore/image/multimedia/none/992-carrera-t-modelexplorer/normal/b34fb743-4ede-11ed-80f7-005056bbdc38;sS;twebp065/porsche-normal.webp",
        type:"Sports" ,
        tags: ["Carrera", "Speed"]
       },
      {
        id: 2,
        title: "Tesla Model 3",
        description:"The Tesla Model 3 is an all-electric compact sedan",
        creator:"Tesla",
        imgURL:"https://cdn.carbuzz.com/car-thumbnails/700x375/15000/100/15123.jpg",
        type:"Sedan",
        tags:["Green", "hybrid"]
      },
      {
        id: 3,
        title: "Chevrolet Bolt EV",
        description: "The Chevrolet Bolt EV is a versatile all-electric hatchback.",
        creator: "Chevrolet",
        imgURL: "https://www.cnet.com/a/img/resize/a0a235f3c1f57107631e821ea1e5322df8af5855/hub/2020/09/21/7cfc6844-489d-441f-b782-3224a6b79d47/img-1498.jpg?auto=webp&width=1200",
        type: "Sports",
        tags:["American", "Plugin"]
      },
      {
        id: 4,
        title: "Nissan Leaf",
        description: "The Nissan Leaf is a popular all-electric compact car with advanced features.",
        creator: "Nissan",
        imgURL: "https://hips.hearstapps.com/hmg-prod/images/2023-nissan-leaf-9-1200x800-1649785072.jpg?crop=0.659xw:0.740xh;0.112xw,0.245xh&resize=768:*",
        type: "Sedan",
        tags:["sports", "Leaf"]
      },
      {
        id: 5,
        title: "BMW i4",
        description: "The BMW i4 is a stylish and high-performance all-electric sedan.",
        creator: "BMW",
        imgURL: "https://upload.wikimedia.org/wikipedia/commons/a/ad/BMW_i4_IMG_6695.jpg",
        type: "Sports",
        tags:["i4", "BMWworld"]
      },
      {
        id: 6,
        title: "Alto K10",
        description: "Alto K10 VXI Specs & Features:Maruti Alto K10 VXI is a 5 seater Petrol car.Alto K10 VXI has Multi-function Steering Wheel, Touch Screen, Anti Lock Braking System, Power Windows Front, Wheel Covers, Passenger Airbag, Driver Airbag, Power Steering, Air Conditioner.",
        creator: "Maruti",
        imgURL: "",
        type: "",
        tags:["Familycar", "hatchback"]
      },
      
    ];
  }
  onContentCreated(newContent: any) {
    this.contentItems.push({ ...newContent }); 
  }
 
}
