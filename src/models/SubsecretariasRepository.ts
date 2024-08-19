import BaseRepository from "./BaseRepository";

export default class SubsecretariasRepository extends BaseRepository {
    constructor(){
       super ({ table: 'subsecretarias' })
    }
}

