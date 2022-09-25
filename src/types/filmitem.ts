export interface FilmitemInterfaceBewertet {
    id:string,
    netflixid:string,
    volltextName: string, 
    searchtitle:string,
    beschreibung: string, 
    picture:string, 
    releaseJahr:string,
    userGivenRating:number,
    
  }


export type FilmitemType ={
  id:string,
  netflixid:string,
  volltextName: string, 
  searchtitle:string,
  beschreibung: string, 
  picture:string, 
  releaseJahr:string,
  
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
}