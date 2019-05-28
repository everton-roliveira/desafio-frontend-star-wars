import { Component, OnInit } from '@angular/core';
import { PlanetModel } from 'src/app/@core/models/planet';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  public planet: PlanetModel = new PlanetModel();

  constructor() { }

  ngOnInit() {
    this.planet = {
      _id: 'sds586iosd',
      name: 'Bespin',
      population: '6000000',
      climate: 'temperate',
      terrain: 'gas giant',
      films: 3
    }
  }

}
