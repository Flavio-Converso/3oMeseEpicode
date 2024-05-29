import { Component, OnInit } from '@angular/core';
import { iProdotti } from '../../modules/iprodotti';
import { ProductsService } from '../../products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  prodotti: iProdotti[] = [];

  constructor(private prodottiSvc: ProductsService) {}

  ngOnInit() {
    this.prodottiSvc.getAll().subscribe((data) => {
      this.prodotti = data;
      console.log(this.prodotti);
    });
  }

  aggiungiPreferito(prodotto: iProdotti) {
    this.prodottiSvc.addFavorite(prodotto);
  }
}
