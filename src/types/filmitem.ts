export interface FilmitemInterfaceBewertet {
    id:string,
    netflixid:string,
    volltextName: string, 
    searchtitle:string,
    beschreibung: string, 
    picture:string, 
    releaseJahr:string,
    userGivenRating:number,
    isFromTmdb:boolean,
  adult:boolean,
  backdrop:string,
  genre_ids:number[],
  original_language:string,
  popularity:number,
  vote_average:number,
  tmdb_id:number,
  vote_count:number,
  
  }


export type FilmitemType ={
  id:string,
  netflixid:string,
  volltextName: string, 
  searchtitle:string,
  beschreibung: string, 
  picture:string, 
  releaseJahr:string,
  isFromTmdb:boolean,
  adult:boolean,
  backdrop:string,
  genre_ids:number[],
  original_language:string,
  popularity:number,
  vote_average:number,
  tmdb_id:number,
  vote_count:number,
  
}
export type FilmitemTypeBewertet ={
  id:string,
  netflixid:string,
  volltextName: string, 
  searchtitle:string,
  beschreibung: string, 
  picture:string, 
  releaseJahr:string,
  userGivenRating:number,
  isFromTmdb:boolean,
  adult:boolean,
  backdrop:string,
  genre_ids:number[],
  original_language:string,
  popularity:number,
  vote_average:number,
  tmdb_id:number,
  vote_count:number,
  
}
export type RecommendFilmItem = {
  id:string,
  netflixid:string,
  volltextName: string, 
  searchtitle:string,
  beschreibung: string, 
  picture:string, 
  releaseJahr:string,
  recommendations:FilmitemType[]
  isFromTmdb:boolean,
  adult:boolean,
  backdrop:string,
  genre_ids:number[],
  original_language:string,
  popularity:number,
  vote_average:number,
  tmdb_id:number,
  vote_count:number,
  
}
export type GeteilteNachbarnResponse = {
  result:FilmitemType[]
}