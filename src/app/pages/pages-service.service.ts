import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PagesServiceService {

  constructor(private http: HttpClient) { }

  getAnimals() {
    const url = 'http://35.192.118.99:3000/api/org.cattle.tracker.Animal'
    return this.http.get(url);
  }

  getContract(animals: any[]) {
    const url = 'http://35.192.118.99:3000/api/org.cattle.tracker.CreateContract'
    const body = {
      $class: "org.cattle.tracker.CreateContract",
      animals: animals,
      farm: "resource:org.cattle.tracker.Company#0001",
      fridge: "resource:org.cattle.tracker.Company#0002"
    }

    console.log(body)
    return this.http.post(url, body)

  }

  resetAnimals() {
    const url = 'http://35.192.118.99:3000/api/org.cattle.tracker.Reset'
    return this.http.post(url, {});
  }

  getContracts() {
    const url = 'http://35.192.118.99:3000/api/org.cattle.tracker.Contract'
    return this.http.get(url);
  }
}
