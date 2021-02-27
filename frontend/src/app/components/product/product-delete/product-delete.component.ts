import { ProductService } from "./../product.service";
import { Product } from "./../product.model";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-product-delete",
  templateUrl: "./product-delete.component.html",
  styleUrls: ["./product-delete.component.css"],
})
export class ProductDeleteComponent implements OnInit {
  product: Product;

  constructor(private prouctService: ProductService) {}

  ngOnInit(): void {
    const id = 'i'
    this.productService.readById(id).subscribe((product) => {
      this.product = product
    });
  }

  deleteProduct(): void {}
  cancell(): void{}
}
