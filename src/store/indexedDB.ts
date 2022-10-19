import Dexie from "dexie";
import { FilmitemType } from "../types/filmitem";

export class MyAppDatabase extends Dexie {
    filmitems!: Dexie.Table<FilmitemType,number>;
    

    constructor(){
        super("recommendersystem-offline-cache");
        this.version(1).stores({
            filmitems: 'id,netflixid,volltextName,searchtitle,beschreibung,picture,releaseJahr,userGivenRating,isFromTmdb,adult,backdrop,genre_ids,original_language,popularity,vote_average,tmdb_id,vote_count',
            })
    }
}

export const db = new MyAppDatabase();