import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { RouterModule } from "@angular/router";
import { AnimalsComponent } from "./animals/animals.component";
import { PagesComponent } from "./pages.component";

const routes: Routes = [{

  path: '',
  component: PagesComponent,

  children: [
    {
      path: 'animals',
      component: AnimalsComponent,
    }, {
      path: '**',
      component: AnimalsComponent,
    }, {
      path: '',
      redirectTo: 'animals',
      pathMatch: 'full',
    }],

}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
