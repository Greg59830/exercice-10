import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  sectionValue = 0
  buttonClicked = false
  products: Product[] = [
    {
      id: 1,
      name: "Iphone 13",
      desc: "Nouvel arrivant dans la famille iOS",
      price: 1299.99
    },
    {
      id: 2,
      name: "Nintendo Switch OLED",
      desc: "Version avec écran amélioré de la Nintendo Switch",
      price: 469.99
    },
    {
      id: 3,
      name: "PlayStation 5",
      desc: "Console impossible à trouver, stocks limitéss",
      price: 599.99
    },
    {
      id: 4,
      name: "MacBook Pro M1",
      desc: "Ordinateur portable extrèmement puissant",
      price: 2499.99
    },
    {
      id: 5,
      name: "Xbox Série X",
      desc: "Nouvelle console de Microsoft, fournie avec le GamePass",
      price: 699.99
    },
  ]
  title = 'my-app';

  changeSectionValue(value: number) {
    this.sectionValue = value
  }

  switchSecrets() {
    this.buttonClicked = !this.buttonClicked
  }
}
