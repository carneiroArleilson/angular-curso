<<<<<<< HEAD
import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
=======
>>>>>>> parent of aa93ace (Componente Atualizar Produto #02)
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./views/home/home.component";
import { ProductCrudComponent } from "./views/product-crud/product-crud.component";
import { ProductCreateComponent } from "./components/product/product-create/product-create.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "products",
    component: ProductCrudComponent
  },{
    path: "products/create",
    component: ProductCreateComponent
<<<<<<< HEAD
  },{
    path: "products/update/:id",
    component: ProductUpdateComponent
  },{
    path: "products/delete/:id",
    component: ProductDeleteComponent
=======
>>>>>>> parent of aa93ace (Componente Atualizar Produto #02)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
