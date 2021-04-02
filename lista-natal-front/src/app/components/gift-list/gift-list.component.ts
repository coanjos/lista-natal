import { Input, Output, EventEmitter } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Gift } from 'src/app/models/gift';
import { GiftService } from 'src/app/services/gift.service';

@Component({
  selector: 'app-gift-list',
  templateUrl: './gift-list.component.html',
  styleUrls: ['./gift-list.component.css']
})
export class GiftListComponent implements OnInit {
  @Input() giftsFilho: Gift[];
  @Output() deleteGift = new EventEmitter<number>();
  @Output() updateGift = new EventEmitter<Gift>();
  gift: Gift = { ID: 0, DESCRICAO: '' };
  
  isEditMode: Boolean = false;
  editId: number;
  editDescricao: string;

  constructor(private giftService: GiftService) { }

  ngOnInit(): void {

  }

  onToggleEditMode() {
    this.isEditMode = !this.isEditMode;
  }

  onMarkToEdit(id: number) {
    this.onToggleEditMode();
    this.editId = id;
  }

  onUpdate() {
    this.gift.ID = this.editId;
    this.gift.DESCRICAO = this.editDescricao;
    this.updateGift.emit(this.gift);
    this.onToggleEditMode();
  }

  onChange(e) {
    this.editDescricao = e.target.value;
  }

  onDelete(id: number) {
    this.deleteGift.emit(id);
  }
}
