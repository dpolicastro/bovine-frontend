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
  modalRef: BsModalRef;
  transaction;
  constructor(private pagesService: PagesServiceService, private modalService: BsModalService) { }

  ngOnInit() {
    this.pagesService.getAnimals().subscribe(
      res => {
        console.log(res)
        this.animals = res;
      }
    )
  }

  getContract(template: TemplateRef<any>) {
    let checked = []
    this.animals.forEach(animal => {
      if (animal.checked) {
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
}
