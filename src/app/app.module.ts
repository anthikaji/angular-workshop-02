import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductNamePipe } from './pipe/product-name.pipe';
import { ProductPipe } from './pipe/product.pipe';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RatingComponent } from './rating/rating.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProductListComponent,
    ProductNamePipe,
    ProductPipe,
    RatingComponent,
    ProductDetailComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],

  bootstrap: [AppComponent],
})
export class AppModule {}
