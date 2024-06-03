import { NgModule } from '@angular/core';
import { PostDetailComponent } from './post-detail.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'post/:id', component: PostDetailComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostDetailRoutingModule {}
