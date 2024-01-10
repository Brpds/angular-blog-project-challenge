import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake, postData } from '../../data/dataFake'
import { AlterFormComponent } from 'src/app/components/alter-form/alter-form.component';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  photoCover:string = ""
  contentTitle:string = ""
  contentDescription:string = ""
  postId:string = ``
  private id:string | null = ""

  postEdit:boolean = false

  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(value =>
     this.id = value.get("id")
    )
      this.setValuesToComponent(this.id)
  }

 setValuesToComponent(id:string | null){
   const result = dataFake.filter(article => article.postId == id)[0]
   this.contentTitle = result.postTitle
   this.contentDescription = result.postDescription
   this.photoCover = result.postCover
   this.id = result.postId
 }

 removePost(title:string){
  //const idNumber:number = parseInt(id)
  const newPostList = dataFake.filter(post => post.postTitle !== title)
  dataFake.length = 0
  dataFake.push(...newPostList)
  console.log(dataFake)
}

editPost(){
  switch(this.postEdit){
    case false:
      this.postEdit = true;
      break;
    case true:
      this.postEdit = false;
      break;
    default: false;
      break;
  }
}

}