import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChristmasWishlistComponent } from './components/christmas-wishlist/christmas-wishlist.component';
import { GiftComponent } from './components/gift/gift.component';
import { GiftListComponent } from './components/gift-list/gift-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ChristmasWishlistComponent,
    GiftComponent,
    GiftListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
