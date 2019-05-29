import { Component, OnInit } from '@angular/core';
import { TableConfig, TableModel } from 'src/app/@core/models/table.model';
import { PlanetModel } from 'src/app/@core/models/planet.model';
import { PlanetService } from 'src/app/@core/services';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public configTable: TableConfig = {
    border: false,
    textAlign: 'left',
    headerTextAlignLastColumn: 'center'
  };
  public loading: boolean;

  public table = {
    head: Array<string>(),
    body: Array<PlanetModel>()
  };

  constructor(
    private _planetService: PlanetService
  ) { }

  ngOnInit() {
    this.loading = true;
    this._planetService.listPlanets()
      .subscribe(
        (data: TableModel<Array<PlanetModel>>) => {
          if (data) {
            this.table = data;
          } else {
            this.table.body = [];
          }
          this.loading = false;
        }
      );
  }


  public delete(_id: string) {
    const isDelete = confirm('Deseja realmente deletar esse Planeta?');
    if (isDelete) {
      this.loading = true;
      this._planetService.delete(_id)
        .subscribe(
          (data: boolean) => {
            if (data) {
              alert('Planeta deletado com sucesso!');
            } else {
              alert('Erro ao deletar o Planeta!');
            }
            this.loading = false;
          },
          () => {
            alert('Erro ao deletar o Planeta!')},
          () => {
            this.table = new TableModel<Array<PlanetModel>>();
            this.ngOnInit();
          }
        );
    }
  }

}
