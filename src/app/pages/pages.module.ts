import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { AnimalsComponent } from './animals/animals.component';
import { PagesComponent } from './pages.component';
import { HttpClientModule } from '@angular/common/http';
import { PagesServiceService } from './pages-service.service';
import { FormsModule } from '@angular/forms'
import { ModalModule } from 'ngx-bootstrap/modal';
import { AnimalsModalComponent } from './animals-modal/animals-modal.component';
import { ContractsComponent } from './contracts/contracts.component';
import { AdminComponent } from './admin/admin.component';


@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
    HttpClientModule,
    FormsModule,
    ModalModule.forRoot()
  ],
  declarations: [
    AnimalsComponent,
    PagesComponent,
    AnimalsModalComponent,
    ContractsComponent,
    AdminComponent
  ],
  providers: [
    PagesServiceService
  ]
})
export class PagesModule { }
