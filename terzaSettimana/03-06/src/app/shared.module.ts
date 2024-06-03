import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SinglePostComponent } from './single-post/single-post.component';
@NgModule({
  declarations: [SinglePostComponent],
  imports: [CommonModule, FormsModule],
  exports: [FormsModule, SinglePostComponent],
})
export class SharedModule {}
