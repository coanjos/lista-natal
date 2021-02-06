import { Component, OnInit } from '@angular/core';
import { GiftService } from 'src/app/services/gift.service';
import { Gift } from '../../models/gift';

@Component({
  selector: 'app-gift',
  templateUrl: './gift.component.html',
  styleUrls: ['./gift.component.css']
})
export class GiftComponent implements OnInit {
  
  gift: Gift[] = [{id: 1, description: 'aids'}];

  constructor(private giftService: GiftService) { }

  ngOnInit(): void {
    this.getGifts();
  }

  getGifts() {
    this.giftService.getGifts().subscribe((data: Gift[]) => {
      this.gift = data;

      console.log(data)
    })
  }
}
