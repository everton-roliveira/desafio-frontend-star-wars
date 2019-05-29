import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable, BehaviorSubject } from 'rxjs';
import { map, distinctUntilChanged, debounce, debounceTime } from 'rxjs/operators';
import { TableModel } from '../models/table.model';
import { IResponseContract } from '../interfaces/IResponseContract';
import { PlanetModel } from '../models/planet.model';

@Injectable()
export class PlanetService {

    constructor(
        private _apiService: ApiService
    ) { }

    /**
     * getAll() Método que obtem todos os planetas
     * @return Observable<Array<PlanetModel>>
     */
    private getAll(): Observable<Array<PlanetModel>> {
        return this._apiService
            .get('/planets')
            .pipe(map((data: Array<PlanetModel>) => {
                return data;
            }));
    }

    /**
     * get() Método que obtem 1 planeta conforme o id do mesmo
     * @param _idPlanet id do usuário
     * @returns Observable<PlanetModel> converte a lista vinda da api em um objeto do tipo PlanetModel
     */
    public get(idPlanet: string): Observable<PlanetModel> {
        return this._apiService.get(`/planets/${idPlanet}`)
            .pipe(map((data: PlanetModel) => {
                return data;
            }));
    }

    public getByName(name: string): Observable<Array<PlanetModel>> {
        return this._apiService.get(`/planets/search/aleatory/${name}`)
            .pipe(
                map((data: Array<PlanetModel>) => {
                return data;
            }));
    }

    public getAleatory(): Observable<PlanetModel> {
        return this._apiService.get('/planets/search/aleatory')
            .pipe(map((data: PlanetModel) => {
                return data;
            }));
    }

    /**
     * listPlanets() Método responsável por pegar os planetas retornados pelo método get()
     * e montar a tabela de planetas.
     * @return Observable<TableModel<Array<PlanetModel>>>
     */
    public listPlanets(): Observable<TableModel<Array<PlanetModel>>> {
        const observable$ = this.getAll();
        return observable$
            .pipe(map((data: Array<PlanetModel>) => {
                const table: TableModel<Array<PlanetModel>> = {
                    head: ['Nome', 'Ação'],
                    body: data
                };
                return table;
            }));
    }

    /**
     * create() Envia um planeta para a api fazer a inserção
     * @param _planet A model de planetas que será enviada
     * @return Observable<boolean> retorna isSuccess
     */
    public create(planet: PlanetModel): Observable<boolean> {
        return this._apiService
            .post('/planets', planet)
            .pipe(map((data: IResponseContract<PlanetModel>) => {
                return data.isSuccess;
            }));
    }

    /**
     * update() Envia um planeta para a api fazer a edição conforme seu id
     * @param _planet A model de planetas que será enviada
     * @return Observable<boolean> retorna isSuccess
     */
    public update(planet: PlanetModel): Observable<IResponseContract<PlanetModel>> {
        return this._apiService.put(`/planets/${planet._id}`, planet)
            .pipe(map((data: IResponseContract<PlanetModel>) => {
                return data;
            }));
    }

    /**
     * delete() envia o id de um planeta para a api fazer a deleção do mesmo
     * @param _idPlanet id do planeta
     * @return Observable<boolean> retorna isSuccess
     */
    public delete(idPlanet: string): Observable<boolean> {
        return this._apiService.delete(`/planets/${idPlanet}`)
            .pipe(map((data: IResponseContract<PlanetModel>) => {
                return data.isSuccess;
            }));
    }
}
