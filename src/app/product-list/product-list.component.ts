import { Component } from '@angular/core';
import { Product } from 'src/Products';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  products:Product[]=[
    {id:1,name:"Laptop",price:80000},
    {id:2,name:"Phone",price:30000},
    {id:3,name:"HeadPhones",price:3000}
  ];

  MyShoppingcart:Product[]=[];

  onAddToCart(prod:Product){

    //console.log(prod);
this.MyShoppingcart.push(prod);//add-push

  }

  onRemoveFromCart(prod:Product)
  {
    console.log("Removing: ",prod);
    this.MyShoppingcart=this.MyShoppingcart.filter(item=>item.id!==prod.id);

  }

}
