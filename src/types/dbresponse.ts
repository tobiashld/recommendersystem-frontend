import { FilmitemType } from "./filmitem"

export type APIGenreResponse = {
    genres:APIGenre[]
}

export type APIGenre = {
    id:number,
    name:string
}

export type DBResponse = {
    responseHeader:{
        status:number,
        QTime:number,
        params:{
            q:string
        }
    },
    response:{
        numFound:number,
        start:number,
        numFoundExact:boolean,
        docs:DBFilmType[]
    }
}
export type DBResponseBereinigt = {
    responseHeader:{
        status:number,
        QTime:number,
        params:{
            q:string
        }
    },
    response:{
        numFound:number,
        start:number,
        numFoundExact:boolean,
        docs:FilmitemType[]
    }
}

export type DBFilmType = {
    id:string,
    beschreibung:string,
    netflixid:string,
    picture:string,
    releaseJahr:string,
    searchtitle:string,
    volltextName:string,
    isFromTmdb:boolean,
  adult:boolean,
  backdrop:string,
  genre_ids:number[],
  original_language:string,
  popularity:number,
  vote_average:number,
  tmdb_id:number,
  vote_count:number,
  
    _version_:number
}
