import { Component, OnInit, Input } from '@angular/core';
import { Article } from './article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

@Input() article:Article;

  constructor() { 
    this.article=new Article("Angular2","https://angular.io/tutorial",14);
  }

  ngOnInit() {
  }

  voteUp():boolean{
    this.article.vote+=1;
    
    return false;
  }
  voteDown():boolean{
    this.article.vote-=1;
    
    return false; 
  }

}
