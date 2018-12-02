import { Component } from '@angular/core';
import{Article}from '../app/article/article'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog';
  articles:Article[];

  addArticle(title:HTMLInputElement,link:HTMLInputElement):boolean{
    console.log(`Adding article title:${title.value} and link:${link.value}`)
    this.articles.push(new Article(title.value,link.value,0));
    return false;
  }

  constructor(){
    this.articles=[new Article('Angular 2', 'http://angular.io', 3),new Article('bootstrep', 'https://getbootstrap.com/', 3),new Article('facebook', 'https://www.facebook.com/', 3)]
  }
}
