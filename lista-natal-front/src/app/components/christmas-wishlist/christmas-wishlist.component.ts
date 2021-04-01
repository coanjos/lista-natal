import { Component, OnInit } from '@angular/core';
import { Gift } from 'src/app/models/gift';

@Component({
  selector: 'app-christmas-wishlist',
  templateUrl: './christmas-wishlist.component.html',
  styleUrls: ['./christmas-wishlist.component.css']
})
export class ChristmasWishlistComponent implements OnInit {
  gift: Gift = { ID: 1, DESCRICAO: 'wololo' };  

  constructor() { }

  ngOnInit(): void {
  }

}
