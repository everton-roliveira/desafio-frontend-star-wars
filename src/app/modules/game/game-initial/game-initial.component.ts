import { Component, OnInit } from '@angular/core';
import { PlanetService } from 'src/app/@core/services';
import { Router } from '@angular/router';
import { PlanetModel } from 'src/app/@core/models/planet.model';

@Component({
  selector: 'app-game-initial',
  templateUrl: './game-initial.component.html',
  styleUrls: ['./game-initial.component.scss']
})
export class GameInitialComponent implements OnInit {

  public openSearch: boolean;
  public planets: Array<PlanetModel> = new Array<PlanetModel>();
  public namePlanet: string;
  public planet: PlanetModel = new PlanetModel();

  constructor(
    private _planetService: PlanetService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.openSearch = false;
    this.namePlanet = '';

  }

  public getPlanetAleatory() {
    this._planetService.getAleatory()
      .subscribe(
        next => {
          if (next) {
            this._router.navigateByUrl(`/game/${next._id}`);
          } else {
            alert('Erro ao obter Planeta');
          }
        },
        error => {
          alert(error.message);
        }
      )
  }

  public onKeyUp(value: string) {
    if (value.length > 0) {
      this._planetService.getByName(value)
        .subscribe(
          data => {
            if (data) {
              this.planets = data;
            }
          }
        )
    } else {
      this.cleanList();
    }
  }

  public selectPlanet(id: string) {
    this.planet = this.planets.find(x => x._id === id);
    this.cleanList();
  }

  public cleanList() {
    this.planets = new Array<PlanetModel>();
  }
}
