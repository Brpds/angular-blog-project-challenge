import { Component, Input, OnInit } from '@angular/core';
import { dataFake, postData } from 'src/app/data/dataFake';

@Component({
  selector: 'app-small-card',
  templateUrl: `./small-card.component.html`,
  styleUrls: ['./small-card.component.css']
})

export class SmallCardComponent implements OnInit {

  postInfo:postData[] = [...dataFake].reverse()


  constructor() {}

  ngOnInit(): void {
    console.log(this.postInfo)
  }

}
