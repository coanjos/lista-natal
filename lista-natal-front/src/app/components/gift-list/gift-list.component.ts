import { Component, OnInit } from '@angular/core';
import { Gift } from 'src/app/models/gift';
import { GiftService } from 'src/app/services/gift.service';

@Component({
  selector: 'app-gift-list',
  templateUrl: './gift-list.component.html',
  styleUrls: ['./gift-list.component.css']
})
export class GiftListComponent implements OnInit {
  gifts: Gift[];

  constructor(private giftService: GiftService) { }

  ngOnInit(): void {
    this.giftService.getGifts().subscribe(data => {
      this.gifts = data;
    });
  }

  onDelete(id: number) {
    this.giftService.deleteGift(id).subscribe();
  }

}
