import BaseRepository from "./BaseRepository";

export default class SecretariasRepository extends BaseRepository {
    constructor(){
       super ({ table: 'direcciones' })
    }
}

