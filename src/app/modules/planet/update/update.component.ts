import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  public idPlanet: string;
  constructor(
    private _activatedRouter: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this.idPlanet = this._activatedRouter.snapshot.params['id'];
  }

}
