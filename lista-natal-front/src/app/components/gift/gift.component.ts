import { Component, OnInit } from '@angular/core';
import { GiftService } from 'src/app/services/gift.service';

@Component({
  selector: 'app-gift',
  templateUrl: './gift.component.html',
  styleUrls: ['./gift.component.css']
})
export class GiftComponent implements OnInit {
  descricao: string = '';

  constructor(private giftService: GiftService) { }

  ngOnInit(): void {

  }

  onClick() {
    this.giftService.addGift(this.descricao).subscribe(data => {
      console.log(data)
    });

  }

  onChange(e) {
    this.descricao = e.target.value;
  }
}
