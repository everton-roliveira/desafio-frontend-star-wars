export class PlanetModel {
    _id: string;
    population: string;
    name: string;
    climate: string;
    terrain: string;
    films: number;

    constructor() {
        this._id = '';
        this.population = '';
        this.name = '';
        this.climate = '';
        this.terrain = '';
        this.films = 0;
    }
}