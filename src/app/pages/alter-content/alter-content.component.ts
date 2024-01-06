import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alter-content',
  templateUrl: './alter-content.component.html',
  styleUrls: ['./alter-content.component.css']
})

    
export class AlterContentComponent implements OnInit {

  bigNewsCover:string = 'https://picsum.photos/600/240'
  bigNewsTitle:string = 'Here Title'
  bigNewsDescription: string = 'Random Description for an item'

  constructor() { }

  ngOnInit(): void {
  }

  setBigNews(){
    
  }
}
