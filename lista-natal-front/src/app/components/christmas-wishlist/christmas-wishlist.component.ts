import { Component, OnInit } from '@angular/core';
import { Gift } from 'src/app/models/gift';
import { GiftService } from 'src/app/services/gift.service';

@Component({
  selector: 'app-christmas-wishlist',
  templateUrl: './christmas-wishlist.component.html',
  styleUrls: ['./christmas-wishlist.component.css']
})
export class ChristmasWishlistComponent implements OnInit {
  giftsPai: Gift[];

  constructor(private giftService: GiftService) { }

  ngOnInit(): void {
    this.getGitfs()
  }

  getGitfs() {
    this.giftService.getGifts().subscribe(data => {
      this.giftsPai = data;      
    });
  }

  onDeleteGift(id: number) {
    this.giftService.deleteGift(id).subscribe();

    this.getGitfs();
  }

  onAddGift(descricao: string) {
    this.giftService.addGift(descricao).subscribe();

    this.getGitfs();
  }

  onEditGift(gift: Gift) {
    this.giftService.updateGift(gift.ID, gift.DESCRICAO).subscribe(data => {
      this.getGitfs();
    });

    
  }

}
