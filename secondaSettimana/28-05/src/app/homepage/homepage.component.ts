import { Component, ViewChild } from '@angular/core';
import { PostInterface } from 'src/interfaces/post.interface';
import { SinglePostComponent } from '../single-post/single-post.component';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent {
  editPost() {
    this.singlePost.toggleEdit();
  }
  constructor(private blogSvc: BlogService) {}

  post!: PostInterface;
  related: PostInterface[] = [];
  posts = this.blogSvc.posts;

  @ViewChild('singlePost') singlePost!: SinglePostComponent;

  ngOnInit(): void {
    this.post = this.blogSvc.topPost;
    this.related = this.blogSvc.getRandomPosts(4);
  }
}
