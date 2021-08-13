import { Component, OnInit } from '@angular/core';
import { CommentsService } from 'src/app/services/comments.service';
@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  commentsData:any;
  constructor(public commentService: CommentsService) { }

  ngOnInit(): void {
    this.getComments();
  }
  getComments() {
    this.commentService.getComments().subscribe(data =>{
      if(data.length>0) {
        this.commentsData = data;
      }
    })
  }
}
