import { Component, OnInit, Input  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { dataFake, postData } from 'src/app/data/dataFake';

@Component({
  selector: 'app-alter-form',
  templateUrl: './alter-form.component.html',
  styleUrls: ['./alter-form.component.css']
})
export class AlterFormComponent implements OnInit {
  
  @Input()
  bigNewsTitle: string = '';
  @Input()
  bigNewsDescription: string = '';
  @Input()
  bigNewsCover: string = '';

  newPost:postData[] = [
    {
      "postId": '',
      "postCover": '',
      "postTitle": '',
      "postDescription": ''
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  addData(){
    const newPost = {
      "postId" : `${dataFake.length + 1}`,
      "postTitle" : this.bigNewsTitle,
      "postCover" : this.bigNewsCover,
      "postDescription" : this.bigNewsDescription
    }
    dataFake.push(newPost)
    console.log(dataFake)
  }

}
