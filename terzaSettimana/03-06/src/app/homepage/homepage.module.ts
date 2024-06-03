import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageRoutingModule } from './homepage-routing.module';
import { HomepageComponent } from './homepage.component';
import { SharedModule } from '../shared.module';
import { SinglePostComponent } from '../single-post/single-post.component';

@NgModule({
  declarations: [HomepageComponent, SinglePostComponent],
  imports: [CommonModule, HomepageRoutingModule, SharedModule],
})
export class HomepageModule {}
