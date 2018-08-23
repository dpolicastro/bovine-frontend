import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { RouterModule } from "@angular/router";
import { AnimalsComponent } from "./animals/animals.component";
import { PagesComponent } from "./pages.component";
import { ContractsComponent } from "./contracts/contracts.component";
import { AdminComponent } from "./admin/admin.component";

const routes: Routes = [{

  path: '',
  component: PagesComponent,

  children: [
    {
      path: 'animals',
      component: AnimalsComponent,
    }, {
      path: 'contracts',
      component: ContractsComponent,
    }, {
      path: 'admin',
      component: AdminComponent,
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
