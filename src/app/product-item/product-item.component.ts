import { Component, EventEmitter, Input,Output } from '@angular/core';
import { Product } from 'src/Products';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
@Input() productinput!:Product;//taking input from the parent
@Output() add=new EventEmitter<Product>();//Event to the parent
@Output() remove=new EventEmitter<Product>();

emitremoveFromCart()
{
  console.log(this.productinput);
  this.remove.emit(this.productinput);
}

emitaddToCart()
{
  console.log("Child emitting:", this.productinput);
  this.add.emit(this.productinput);//output thrown from child to the parent
}


}
