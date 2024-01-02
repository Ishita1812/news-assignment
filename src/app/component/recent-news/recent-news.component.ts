import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { OnSameUrlNavigation, RouterLink } from '@angular/router';
import { RecentNewsService } from '../../services/recent-news.service';

@Component({
  selector: 'app-recent-news',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './recent-news.component.html',
  styleUrl: './recent-news.component.css'
})
export class RecentNewsComponent implements OnInit{

constructor(private Service: RecentNewsService) {}
 
  news: any[] = [];
 
  ngOnInit(): void {

    this.news = this.Service.news;

  }

  onClick()

  {

    alert("Bookmarked Sucessfully");

  }

}
