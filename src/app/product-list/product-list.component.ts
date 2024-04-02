import { Component } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  // name = "Nikhil Yakkala";
  addToCart: number = 0;
  product = {
    name: 'Iphone14',
    price: 999,
    color: 'Matte Black',
    discount: 10,
    inStock: 10,
    pImage: '/assets/images/iphone.png'
  }

  getDiscountedPrice() {
    return this.product.price - (this.product.price * this.product.discount / 100)
  }

  onNameChange(event: any) {
    // this.name = event.target.value;
    // console.log(event.target.value);
  }

  decrementCart() {
    if(this.addToCart > 0)
      this.addToCart -= 1
  }

  incrementCart() {
    if(this.addToCart < this.product.inStock)
      this.addToCart += 1
  }
}
