import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {

  postIndex:number = dataFake.length - 1

  Id:string = `${dataFake[this.postIndex].postId}`
  photoCover:string = `${dataFake[this.postIndex].postCover}`
  cardTitle:string = `${dataFake[this.postIndex].postTitle}`
  cardDescription:string = `${dataFake[this.postIndex].postDescription}`
  private id:string | null = `${this.postIndex}`

  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    console.log(dataFake)
  }
}
