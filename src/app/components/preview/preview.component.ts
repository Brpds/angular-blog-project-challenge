import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})

export class PreviewComponent implements OnInit {
  
  bigNewsTitle: string = '';
  bigNewsDescription: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  

}
