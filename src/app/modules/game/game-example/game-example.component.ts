import { Component, OnInit, Input } from '@angular/core';
import { PlanetModel } from 'src/app/@core/models/planet.model';
import { PlanetService } from 'src/app/@core/services';
import { Router, RouterStateSnapshot, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game-example',
  templateUrl: './game-example.component.html',
  styleUrls: ['./game-example.component.scss']
})
export class GameExampleComponent implements OnInit {

  public planet: PlanetModel = new PlanetModel();
  public loading: boolean;

  constructor(
    private _planetService: PlanetService,
    private _activeRoute: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this.loading = true;
    const id = this._activeRoute.snapshot.params.id;
    if (id) {
      this._planetService.get(id)
        .subscribe(
          next => {
            this.planet = this.buildPlanet(next);
          },
          error => {
            alert(error.message);
          },
          () => this.loading = false
        );
    } else {
      alert('Não foi possivel obter o id do Planeta');
      this._router.navigateByUrl('/game/start-game');
    }
  }

  private buildPlanet(planet: PlanetModel): PlanetModel {
    if (planet) {
      planet.population = planet.population === undefined ||
        planet.population == null ||
        planet.population.toUpperCase().trim() === 'unknown' ? 'Desconhecido' : planet.population;

      planet.films = planet.films === undefined ||
        planet.films == null ? 0 : planet.films;
    } else {
      planet = new PlanetModel();
    }

    return planet;
  }
}
