import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RandomColorDirective } from 'src/directives/randomColor.directive';

@NgModule({
  declarations: [AppComponent, NavbarComponent],
  imports: [BrowserModule, AppRoutingModule, RandomColorDirective],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
