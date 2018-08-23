import { Component, OnInit } from '@angular/core';
import { PagesServiceService } from '../pages-service.service';

@Component({
  selector: 'app-contracts',
  templateUrl: './contracts.component.html',
  styleUrls: ['./contracts.component.css']
})
export class ContractsComponent implements OnInit {

  constructor(private service: PagesServiceService) { }

  contracts
  ngOnInit() {
    this.service.getContracts()
      .subscribe((contracts: any[]) => {
        this.contracts = contracts
        console.log(this.contracts)
      })
  }

}
