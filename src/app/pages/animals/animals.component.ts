import { Component, OnInit, TemplateRef } from '@angular/core';
import { PagesServiceService } from '../pages-service.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.css']
})
export class AnimalsComponent implements OnInit {

  animals;
  allAnimals;
  modalRef: BsModalRef;
  transaction;
  listingSold: boolean = false;
  constructor(private pagesService: PagesServiceService, private modalService: BsModalService) { }

  ngOnInit() {
    this.pagesService.getAnimals().subscribe(
      res => {
        console.log(res)
        this.allAnimals = res;
        this.animals = this.allAnimals.filter(animal => {
          return animal.status === 'FOR_SALE'
        })
      }
    )
  }

  getContract(template: TemplateRef<any>) {
    let checked = []
    this.animals.forEach(animal => {
      if (animal.checked) {
        animal.status = "SOLD"
        checked.push("resource:org.cattle.tracker.Animal#" + animal.rfid)
      }
    })
    console.log(checked)
    this.pagesService.getContract(checked).subscribe(
      res => {
        this.transaction = res;
        this.modalRef = this.modalService.show(template);
        console.log(res)
      }
    )
  }

  listForSale() {
    this.animals = this.allAnimals.filter(animal => {
      return animal.status === 'FOR_SALE'
    })
    this.listingSold = false;
  }

  listSold() {
    this.animals = this.allAnimals.filter(animal => {
      return animal.status === 'SOLD'
    })
    this.listingSold = true;
  }
}
