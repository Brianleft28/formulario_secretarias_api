import BaseRepository from "./BaseRepository";

export default class DireccionesRepository extends BaseRepository {
    constructor(){
       super ({ table: 'direcciones' })
    }
}

