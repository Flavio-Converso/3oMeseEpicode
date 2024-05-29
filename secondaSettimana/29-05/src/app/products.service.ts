import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { iProdotti } from './modules/iprodotti';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  apiUrl: string = 'https://dummyjson.com/products';
  constructor(private http: HttpClient) {}

  //get all products
  getAll(): Observable<iProdotti[]> {
    return this.http
      .get<{ products: iProdotti[] }>(this.apiUrl)
      .pipe(map((response) => response.products));
  }
}
