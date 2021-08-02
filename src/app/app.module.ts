import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { StockComponent } from './stock/stock.component';
import { OrderComponent } from './order/order.component';
import { CardComponent } from './card/card.component';
import { CardTwoComponent } from './card-two/card-two.component';
import { CardThreeComponent } from './card-three/card-three.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FourOhfourComponent } from './four-ohfour/four-ohfour.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProductComponent } from './product/product.component';
import { ClientComponent } from './client/client.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StockComponent,
    OrderComponent,
    CardComponent,
    CardTwoComponent,
    CardThreeComponent,
    SidebarComponent,
    FourOhfourComponent,
    HomePageComponent,
    ProductComponent,
    ClientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }