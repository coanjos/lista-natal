import { Component, OnInit } from '@angular/core';
import { Gift } from 'src/app/models/gift';

@Component({
  selector: 'app-christmas-wishlist',
  templateUrl: './christmas-wishlist.component.html',
  styleUrls: ['./christmas-wishlist.component.css']
})
export class ChristmasWishlistComponent implements OnInit {
  gift: Gift = { id: 1, description: 'wololo' };  

  constructor() { }

  ngOnInit(): void {
  }

}
