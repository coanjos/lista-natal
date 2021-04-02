import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { GiftService } from 'src/app/services/gift.service';

@Component({
  selector: 'app-gift',
  templateUrl: './gift.component.html',
  styleUrls: ['./gift.component.css']
})
export class GiftComponent implements OnInit {
  descricao: string = '';
  @Output() addGift = new EventEmitter<string>()

  constructor(private giftService: GiftService) { }

  ngOnInit(): void {

  }

  onClick() {
    this.addGift.emit(this.descricao)
  }

  onChange(e) {
    this.descricao = e.target.value;
  }
}
