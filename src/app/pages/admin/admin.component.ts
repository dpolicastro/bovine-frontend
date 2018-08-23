import { Component, OnInit } from '@angular/core';
import { PagesServiceService } from '../pages-service.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private service: PagesServiceService) { }

  ngOnInit() {
  }

  onAllForSale(){
    this.service.resetAnimals().toPromise().then(
      res => {
        alert('Animals status changed to FOR_SALE')
      }
    )
  }

}
