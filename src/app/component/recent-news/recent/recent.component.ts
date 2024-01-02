import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { RecentNewsService } from '../../../services/recent-news.service';

@Component({
  selector: 'app-recent',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './recent.component.html',
  styleUrl: './recent.component.css'
})
export class RecentComponent implements OnInit {
  constructor(
    private service: RecentNewsService,
    private activeRoute: ActivatedRoute
  ) {}
 
  course: any;
  courseId: any = 0;
 
  ngOnInit(): void {
    this.courseId = this.activeRoute.snapshot.params['id'];
    this.course = this.service.news.find((x) => x.id == this.courseId);
  }
}


