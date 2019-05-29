import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PlanetModel } from 'src/app/@core/models/planet.model';
import { PlanetService } from 'src/app/@core/services';
import { IResponseContract } from 'src/app/@core/interfaces/IResponseContract';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Input() idPlanet: string;
  public formPlanet: FormGroup;
  public fb: FormBuilder = new FormBuilder();
  public formInvalid = false;
  public observableUser$: Observable<PlanetModel>;
  public loading: boolean;


  constructor(
    private _planetService: PlanetService,
    private _router: Router,
  ) { }

  ngOnInit() {
    this.loading = true;
    if (this.idPlanet) {
      this._planetService.get(this.idPlanet)
        .subscribe(
          (data: PlanetModel) => this.createForm(data),
          error => {
            alert(error);
            this._router.navigateByUrl('/planets');
          },
          () => this.loading = false
        );
    } else {
      this.createForm(new PlanetModel());
      this.loading = false;
    }
  }

  private createForm(planet: PlanetModel) {
    this.formPlanet = this.fb.group({
      _id: new FormControl(planet._id),
      name: new FormControl(planet.name, [Validators.required]),
      climate: new FormControl(planet.climate, [Validators.required]),
      terrain: new FormControl(planet.terrain, [Validators.required]),
    });
  }

  public onSubmit() {
    if (this.validator()) {
      this.loading = true;
      const planet: PlanetModel = this.formPlanet.value;
      if (!this.idPlanet) {
        this.create(planet);
      } else {
        this.update(planet);
      }
    } else {
      this.formInvalid = true;
    }
  }

  private validator(): boolean {
    return this.formPlanet.valid;
  }

  private create(planet: PlanetModel) {
    planet._id = null;
    this._planetService.create(planet)
      .subscribe(
        (next: boolean) => {
          if (next) {
            this.loading = false;
            alert('Planeta inserido com sucesso!');
            this._router.navigate(['/planets']);
          }
        },
        error => {
          this.loading = false;
          alert(error.message);
        }
      );
  }

  private update(planet: PlanetModel) {
    this._planetService.update(planet)
      .subscribe(
        (next: IResponseContract<PlanetModel>) => {
          if (next.isSuccess) {
            this.loading = false;
            alert('alterado com sucesso!');
            this._router.navigate(['/planets']);
          }
        },
        error => {
          this.loading = false;
          alert(error.message);
        }
      );
  }

  public cancel() {
    const isCancel = confirm('Deseja cancelar?');

    if (isCancel) {
      if (this.idPlanet) {
        this._router.navigateByUrl('/planets');
      } else {
        this.createForm(new PlanetModel);
        this.loading = false;
      }
    }
  }
}
