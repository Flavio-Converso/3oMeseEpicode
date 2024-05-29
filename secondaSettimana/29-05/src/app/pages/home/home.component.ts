import { Component } from '@angular/core';
import { iProdotti } from '../../modules/iprodotti';
import { ProductsService } from '../../products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  prodotti: iProdotti[] = [];
  preferiti: iProdotti[] = [];
  constructor(private prodottiSvc: ProductsService) {}

  ngOnInit() {
    this.prodottiSvc.getAll().subscribe((data) => {
      this.prodotti = data;
      console.log(this.prodotti);
    });
  }
}
